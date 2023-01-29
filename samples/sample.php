<?php

/**
 * This file is part of CodeIgniter 4 framework.
 *
 * (c) CodeIgniter Foundation <admin@codeigniter.com>
 *
 * For the full copyright and license information, please view
 * the LICENSE file that was distributed with this source code.
 */

namespace CodeIgniter\View;

use Config\Services;
use NumberFormatter;

/**
 * View filters
 */
class Filters
{
    /**
     * Returns $value as all lowercase with the first letter capitalized.
     */
    public static function capitalize(string $value): string
    {
        return ucfirst(strtolower($value));
    }

    /**
     * Formats a date into the given $format.
     *
     * @param int|string|null $value
     */
    public static function date($value, string $format): string
    {
        if (is_string($value) && ! is_numeric($value)) {
            $value = strtotime($value);
        }

        return date($format, $value);
    }
}
