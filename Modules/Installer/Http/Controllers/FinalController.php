<?php

namespace Modules\Installer\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Installer\Events\LaravelInstallerFinished;
use Modules\Installer\Helpers\EnvironmentManager;
use Modules\Installer\Helpers\FinalInstallManager;
use Modules\Installer\Helpers\InstalledFileManager;

/**
 * Class FinalController
 *
 * Final view migration and seeding log.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\Installer
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class FinalController extends Controller
{

    /**
     * Update installed file and display finished view.
     *
     * @param InstalledFileManager $finalInstall [Object]
     * @param EnvironmentManager   $environment  [Object]
     *
     * @return View
     */
    public function finish(
        FinalInstallManager $finalInstall,
        EnvironmentManager $environment
    ) {
        $finalMessages = $finalInstall->runFinal();
        $finalEnvFile = $environment->getEnvContent();

        event(new LaravelInstallerFinished);

        \View::addLocation(base_path() . '/Modules/Installer/Resources/views');
        \View::addNamespace('theme', base_path() . '/Modules/Installer/Resources/views');
        return \View::make(
            'theme::finished',
            compact('finalMessages', 'finalEnvFile')
        );
    }
}
