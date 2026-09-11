var DK = DK || {};
DK.helpFiles = DK.helpFiles || [];
DK.options = DK.options || {};
if (!DK.options.title) {
    DK.options.title = "Kaba exos API";
}
if (!DK.options.errorCodePath) {
    DK.options.errorCodePath = "/ExosApi/Help/errorCodes.html?filter=";
}
DK.options.errorCodeTitle = "Show possible error codes";

DK.swaggerOptions = {}; // for more options see https://github.com/swagger-api/swagger-ui/blob/master/docs/usage/configuration.md
DK.swaggerOptions.layout = "StandaloneLayout";
DK.swaggerOptions.Wrapper = "div";
DK.swaggerOptions.WrapperId = "dk-swagger-ui";
DK.swaggerOptions.docExpansion = "none"; // String=["list", "full", "none"]
DK.swaggerOptions.deepLinking = true; // Boolean=[true, false]
DK.swaggerOptions.showExtensions = true;
DK.swaggerOptions.validatorUrl = null; // check
DK.swaggerOptions.supportedSubmitMethods = ["get", "post", "put", "delete"]; // Array=["get", "put", "post", "delete", "options", "head", "patch", "trace"]
const offlineMode = DK.preloadedMap && DK.preloadedMap.size > 0;
const setupSwaggerUI = (function (tagName, id) {
    const element = document.createElement(tagName);
    element.id = id;
    document.body.appendChild(element);
})(DK.swaggerOptions.Wrapper, DK.swaggerOptions.WrapperId);

// monkey patch fetch to support offline help and allow changing x-enums to enums (if there are any)
const { fetch: originalFetch } = window;

window.fetch = async (...args) => {
    let [resource, config] = args;

    if (!resource.endsWith(".json")) {
        return originalFetch(...args);
    }

    let textContent = "";
    let modifiedResponse;
    if (DK.preloadedMap) {
        // support for offline help
        modifiedResponse = new Response(); // dummy
        if (DK.jsonPrefix && resource.startsWith(DK.jsonPrefix)) {
            const key = resource.substring(DK.jsonPrefix.length);
            textContent = DK.preloadedMap.get(key);
        }
        if (!textContent) {
            textContent = DK.preloadedMap.get(resource);
        }
    } else {
        const origResp = await originalFetch(resource, config);
        modifiedResponse = origResp.clone();
        textContent = await modifiedResponse.text();
    }

    // perform some adjustments for ui purposes
    const jsonContent = JSON.parse(textContent);
    renameXEnumsToEnums(jsonContent);
    textContent = JSON.stringify(jsonContent);
    const textInterceptor = async () => {
        return textContent; // return modified text content
    };

    modifiedResponse.text = textInterceptor;
    return modifiedResponse;
};

const handleErrorCodesSection = (errorCodes) => {
    let element = document.getElementById('errorCodePlaceholder');
    if (element) {
        // Opens Errorcode section if it is not already open
        // Fetch and append the HTML file
        fetchWithFallback('/ExosApi/Help/errorCodes.html', '/KoneApi/HelpKone/errorCodes.html')
            .then(htmlContent => {
                let errorCodeElement = document.createElement('div'); // Create a <div> element
                errorCodeElement.className = 'no-margin'; // Add the class
                errorCodeElement.id = 'errorCodeBody'; // Add the ID
                errorCodeElement.innerHTML = htmlContent; // Populate the content
                element.replaceWith(errorCodeElement);

                filterTable(errorCodes);
                document.getElementById('errorCodeBody').scrollIntoView({
                    behavior: 'smooth'
                });
            })
            .catch(error => {
                console.error('Error fetching the HTML file:', error);
            });
    }
    else if (errorCodes) { //refilter error codes
        filterTable(errorCodes);
        document.getElementById('errorCodeBody').scrollIntoView({
            behavior: 'smooth'
        });
    }
    else { //close error code section
        element = document.getElementById('errorCodeBody');
        let errorCodePlaceholder = document.createElement('noscript'); // Create a <div> element
        errorCodePlaceholder.id = 'errorCodePlaceholder'; // Add the ID
        element.replaceWith(errorCodePlaceholder);
    }
};

window.onload = function () {
    const ui = SwaggerUIBundle({
        urls: DK.helpFiles,
        dom_id: "#" + DK.swaggerOptions.WrapperId,
        deepLinking: DK.swaggerOptions.deepLinking,
        validatorUrl: DK.swaggerOptions.validatorUrl,
        presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
        plugins: [SwaggerUIBundle.plugins.DownloadUrl],
        layout: DK.swaggerOptions.layout,
        showExtensions: DK.swaggerOptions.showExtensions,
        supportedSubmitMethods: DK.swaggerOptions.supportedSubmitMethods,
        docExpansion: DK.swaggerOptions.docExpansion,
        onComplete: function () {
            adjustToEnvironment();
            loadDeletedFunctionsIFrame();
        },
    });
    window.ui = ui;

    const setTitle = (title) => {
        let titleEl = document.querySelector(".topbar-wrapper > a.link");
        if (titleEl) {
            titleEl.textContent = title;
        }
        document.title = title;
    };

    const basicEnvAdjustments = async () => {
        try {
            // title
            setTitle(DK.options.title);

            // link to json
            if (offlineMode) {
                const links = document.querySelectorAll(".main a");
                for (const link of links) {
                    link.href = "#";
                }
                return false;
            }

            // determine error code link ok
            let resp = await originalFetch(DK.options.errorCodePath);
            if (resp.ok) {
                return true;
            }
            const altUrl = '/KoneApi/HelpKone/errorCodes.html?filter=';
            resp = await originalFetch(altUrl);
            if (resp.ok) {
                DK.options.errorCodePath = altUrl;
                const altTitle = DK.options.title.replaceAll('Kaba exos 9300', 'Kone').replaceAll('Kaba exos', 'Kone').replaceAll('Kaba', 'Kone').replaceAll('exos', '');
                setTitle(altTitle);
                return true;
            }
        } catch (e) {
            console.log('errorCodes check failed: ' + e.message);
        }
        return false;
    };

    const adjustToEnvironment = async () => {
        const ok = await basicEnvAdjustments();
        if (ok) {
            populateLinksForErrorCodes();
            populateErrorCodesDescriptionSection();
        }
    };

    const populateLinksForErrorCodes = async () => {
        let sections = document.querySelectorAll(
            ".swagger-ui .wrapper .opblock-tag-section"
        );
        sections.forEach((section) => {
            section.addEventListener("click", () => {
                if (false === section.classList.contains("is-open")) {
                    return;
                }

                const endpoints = document.querySelectorAll(".opblock");
                endpoints.forEach((endpoint) => {
                    setTimeout(() => {
                        if (
                            false === endpoint.classList.contains("is-open") &&
                            "true" ===
                            endpoint.getAttribute("data-errorCodesLink")
                        ) {
                            endpoint.removeAttribute("data-errorCodesLink");
                        }

                        if (false === endpoint.classList.contains("is-open")) {
                            return;
                        }

                        if (
                            "true" ===
                            endpoint.getAttribute("data-errorCodesLink")
                        ) {
                            return;
                        }

                        const possibleErrorCodeElements =
                            endpoint.querySelectorAll(
                                ".opblock-summary + div .opblock-section:last-child .table-container tbody tr"
                            );
                        possibleErrorCodeElements.forEach(
                            (possibleErrorCodeElement) => {
                                if ("x-errorcodes" === possibleErrorCodeElement.firstChild.innerHTML &&
                                    possibleErrorCodeElement.lastChild.children[0]?.tagName?.toLowerCase() !== 'button') {
                                    const button = document.createElement("button");
                                    button.classList.add("btn");
                                    const errorCodes =
                                        possibleErrorCodeElement.firstChild.nextSibling.innerHTML.replace(
                                            /\"/g,
                                            ""
                                        );
                                    button.title = errorCodes;
                                    button.onclick = function () {
                                        handleErrorCodesSection(errorCodes);
                                    };
                                    button.innerHTML = DK.options.errorCodeTitle;
                                    possibleErrorCodeElement.firstChild.nextSibling.remove();
                                    const td = document.createElement("td")
                                    td.appendChild(button);
                                    possibleErrorCodeElement.appendChild(td);
                                }
                            }
                        );
                    }, 100);
                });
            });
        });
    };

    const populateErrorCodesDescriptionSection = async () => {

        if (!document.getElementById('errorCodeSection')) {
            let sections = document.querySelectorAll(
                ".swagger-ui .wrapper"
            );
            let dropdownHtml = `<section class="block col-12 block-desktop col-12-desktop" id="errorCodeSection">
            <section class="models">
                <h4>
                    <button aria-expanded="false" class="models-control" onclick="handleErrorCodesSection()">
                        <span>Error codes</span>
                        <svg width="20" height="20" aria-hidden="true" focusable="false">
                            <use xlink: href="#large-arrow-down"></use>
                        </svg>
                    </button>
                </h4>
                <noscript id="errorCodePlaceholder">
                </noscript>
            </section>
        </section>`;
            let lastSection = sections[sections.length - 1];
            lastSection.insertAdjacentHTML('beforeend', dropdownHtml);
        }
    };
};

const renameXEnumsToEnums = (ob) => {
    // enum values that have x-enumNames - property for NSWAG client generation -  usually use the integer value in the openApi definition
    // which works well for client generation but not for the ui.
    // Therefore, we replace the enum property with the string values from x-enumNames
    Object.keys(ob).some(function (k) {
        if (k === "x-enumNames") {
            if (ob["type"]) {
                ob["type"] = "string";
            }
            ob["enum"] = ob["x-enumNames"];
            return true;
        }
        if (ob[k] && typeof ob[k] === "object") {
            return renameXEnumsToEnums(ob[k]);
        }
    });
    return false;
};

//errorCodes html script
let filterActive = true;

const switchFilterOnOff = () => {
    filterActive = !filterActive;
    showSelectedErrorCodes();
};

const showSelectedErrorCodes = () => {
    const elements = document.querySelectorAll("#errorCodes tbody tr");
    for (const el of elements) {
        if (filterActive && !el.classList.contains('selectedErrorCode')) {
            el.style.display = 'none';
        } else {
            el.style.display = '';
        }
    }
};

const filterTable = (errorCodeFilter) => {
    if (errorCodeFilter) {
        //unselect all error codes
        const selectedErrorCodes = document.querySelectorAll(".selectedErrorCode");
        selectedErrorCodes.forEach((row) => {
            row.classList.remove("selectedErrorCode");
        });
        // select error codes
        const errorCodes = errorCodeFilter.split(",");
        errorCodes.forEach((errorCode) => {
            const el = document.getElementById(errorCode)
            if (el) {
                el.classList.add("selectedErrorCode");
            }
        });
        if (!filterActive) {
            filterActive = true; //on
        }
        showSelectedErrorCodes();
        document.getElementById('showHideAllErrorCodesButton').style.display = 'block';
    } else {
        document.getElementById('showHideAllErrorCodesButton').style.display = 'none';
    }
};



async function loadDeletedFunctionsIFrame() {
    try {
        if (document.querySelector("#deletedFunctionsSection")) {
            return;
        }

        const swaggerUI = document.querySelector('.swagger-ui');
        const wrappers = swaggerUI.querySelectorAll('.wrapper');
        const lastWrapper = wrappers[wrappers.length - 1]; // Get the last wrapper

        const iframe = document.createElement('iframe');
        iframe.src = './ApiDeleted.html';
        iframe.style.width = '100%';
        iframe.style.height = '500px';
        iframe.style.border = 'none';
        iframe.style.overflow = 'auto';
        iframe.id = 'deleteHandling';
        iframe.className = 'collapsed';
        iframe.style.display = 'none'; // Initially hidden

        const sectionHtml = `
        <section class="block col-12 block-desktop col-12-desktop" id="deletedFunctionsSection">
            <section class="models">
                <h4>
                    <button aria-expanded="false" class="models-control" onclick="toggleDeletedFunctions()">
                        <span>Deleted API endpoints</span>
                        <svg width="20" height="20" aria-hidden="true" focusable="false">
                            <use xlink:href="#large-arrow-down"></use>
                        </svg>
                    </button>
                </h4>
                <div id="iframeContainer"></div>
            </section>
        </section>`;

        if (lastWrapper) {
            lastWrapper.insertAdjacentHTML('beforeend', sectionHtml);
            document.getElementById('iframeContainer').appendChild(iframe);
        } else {
            console.error('No wrapper elements found inside .swagger-ui');
        }

    } catch (error) {
        console.error('Error:', error.message);
    }
}

function toggleDeletedFunctions() {
    const iframe = document.getElementById('deleteHandling');
    const button = document.querySelector('#deletedFunctionsSection button');

    if (iframe.classList.contains('collapsed')) {
        iframe.classList.remove('collapsed');
        iframe.style.display = 'block';
        button.setAttribute('aria-expanded', 'true');
    } else {
        iframe.classList.add('collapsed');
        iframe.style.display = 'none';
        button.setAttribute('aria-expanded', 'false');
    }
}

function fetchWithFallback(primaryUrl, fallbackUrl) {
    return fetch(primaryUrl)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.text();
        })
        .catch(error => {
            // Attempt fallback fetch
            return fetch(fallbackUrl)
                .then(response => {
                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                    return response.text();
                });
        });
}
