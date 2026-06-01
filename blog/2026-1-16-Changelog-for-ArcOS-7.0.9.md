- Migrations: migrations have been revised and will now properly apply when a new version is released
- Migrations: added a migrations tab to Advanced System Settings. If a migration somehow did not run automatically, it can be run from there.
- Migrations: manually running a migration will now also update the migration index to reflect the new version
- ArcOS will no longer hang the tab and/or crash upon first login
- Added support for multiple API's. Press F4 on the boot screen to view the selector
- The browser tab now reflects the current server
- You can now switch between ArcOS and its kernel log by pressing Alt+Shift+K
- ArcTerm: Certain ArcTerm commands now support interrupting by pressing Ctrl+C (Thanks @adrwbln for the suggestion!)
- ArcTerm: added `klog` to view the kernel log. Press Ctrl+C to interrupt (Thanks @blockyheadman for the suggestion!)
- ArcTerm: the `shutdown` command now works properly in ArcTerm Mode
- Fixed a bug where start menu items did not update properly when running a new release for the first time.
- Permissions: added a proper UI for viewing the permissions granted to an application. From here, permissions can be revoked or granted if they were denied earlier. You can access this UI by clicking `Permissions` in App Info. @allucat1000
- Application with ID `arcShell` was not vital, now it is.
- Fixed a timing issue that caused the start menu folder listing was incomplete when logging in for the first time.
- Fixed a softlock caused by the app defined in `UserPreferences.globalSettings.shellExec` failing to start
- Fixed a bug where retrieving icons for unknown or disposed processes would crash ArcOS
- TPAs: fixed a JsExec bug where the contents of a source file failed to parse
- TPAs: `this.elevationContext` is no longer behind a permission lock because there's no reason to lock it down
- Fixed a crash in the App Store caused by undefined user data
- The global load indicator has once again received CSS updates so that it renders properly in the various states it's got
- Logging in may now take up to 300ms longer because of changes made to filesystem indexing
- Initial Setup: Added additional information to the Initial Setup Wizard to convey the importance of using a **valid** email address for the account to be approved
- Initial Setup: The password requirement has been reduced by a notch because users reported having trouble cooking up a strong enough password.
- Fixed an issue with the geometry of the media player tray popup
- The IconEditDialog and IconPicker applications have received updates to properly handle the `IconService` implementation from ArcOS version 7.0.7.

> ArcOS 7.0.9 has been deployed to the servers on January 16th, 2026, at 18:10, counting 2398 modules.

## About permissions

Because of the urgency of the above listed bugs, the permission system has been left effectively unchanged. The designs for the permission request dialog is ready to go, and will be included in ArcOS **7.0.10**.