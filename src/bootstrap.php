<?php

declare(strict_types=1);

// The Exos API is OData-based and requires boolean query parameters
// (most visibly `$count`) to be sent as the literal "true"/"false". The
// generated clients default to Configuration::BOOLEAN_FORMAT_INT ("1"/"0"),
// which the OData layer rejects. Override the default configuration here so
// callers using Configuration::getDefaultConfiguration() (the documented
// usage pattern) get a working client out of the box.
Exos\ExosApi\Configuration::getDefaultConfiguration()
    ->setBooleanFormatForQueryString(Exos\ExosApi\Configuration::BOOLEAN_FORMAT_STRING);

Exos\Auth\Configuration::getDefaultConfiguration()
    ->setBooleanFormatForQueryString(Exos\Auth\Configuration::BOOLEAN_FORMAT_STRING);
