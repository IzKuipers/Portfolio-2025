- The migration of configuration files is now handled using the new `MigrationService`
- During christmas (December 24th to january 4th), the ArcOS logo now has a christmas hat! @allucat1000
- The messaging system has been revised, and threading is now a native part of ArcOS again. It's still a little messy in places, but incremental changes will happen as time goes on.
- Please welcome `img38`: this new wallpaper is a photo of the Evangelical Church of Sopot, Poland.
- Pressing Alt+N in the file manager now opens a new window. @allucat1000
- The trash can has been revised to recycle things more reliably.
- The 2FA setup screen and authentication screens have been updated to include better UX and auto focussing
- The `tpa-spawn-done` dispatch call has been moved so that it's only called once per app launch.
- A bunch of filesystem operations have been rewritten so that they're faster and more reliable.
- We've begun adding a permission system! With this it's possible to access user daemon contexts in third-party applications. For more information, read the **TPA Changes** header below.
- Processes now have a `STATE` property that dictates the actual state of the process.
- Several context menus have been updated to use the internal `use:contextMenu` svelte hook.
- The media player now collects metadata about the file! This includes artist, song name, album art or even album name.
- ArcOS now has pseudo memory calculation, meaning that ArcOS can _estimate_ the memory used by a process by reading what the process contains. This is by no means accurate and does not dictate the weight of one application in relation to another.
- Several applications have been converted to `singleInstance`
- You can now scan a folder to create a playlist from it automatically.
- The start menu items have been moved to the filesystem
- The HexEdit application has been removed because it was heavily outdated and incomplete.
- You can now edit the file manager path by doubleclicking on the address bar
- A bunch of CSS imperfections in App Info, Secure Context, the share dialogs, advanced system settings, bug hunt and the logging app have been fixed
- The calculator app has received a visual update @allucat1000 
- You can now customize ArcTerm's colors! There are a handful of builtin options, but you can always just create your own.
- The crash- and premature panic screens now contain the reason for the crash right on them
- The User Daemon has been split up into several different "user contexts"
- Several icon service problems have been resolved
- The taskbar now has a calendar popup!
- We've begun adding support for user libraries to ArcOS. When complete, developers will be able to submit 'packages' that contain methods or other variables that can be used by other developers.
- JsExec is a new dedicated engine for running ArcOS JS files in a (relatively) controlled environment.
- Fixed several bugs related to battery info
- The workspaces have been updated to give you a more refined experience. @adrwbln, @izkuipers 
- You can now copy the path of folders in the file manager. @adrwbln
- The Random button in the icon picker now actually works (and is beautiful) @adrwbln 
- ArcOS has received new checkboxes, switches and radio buttons for the first time in four years!
- Corrected several typos in ArcOS components
- Light mode has been updated to give the two light mode users (that's an actual metric) a better experience
- The Donut app has been ported to ArcOS v7! @logan.games 
- When accessing ArcOS after midnight, it'll welcome you with "Hi, go to sleep"
- The app store now no longer throws an error when you cancel the elevation when installing an app @allucat1000 
- Tray icons now have context menus that allow you to close the process of the tray icon, among other things @adrwbln
- ArcFind now has the option to exclude shortcuts when searching @allucat1000 
- When creating a shortcut on the desktop, the desktop will now properly refresh again @adrwbln 
- Stack frames of anonymous origin in TPA errors are now ignored
- Several other components have been updated to reflect the CSS changes we began implementing in ArcOS 7.0.3 (boy it's been a long while)
- The context menu animations are now a lot less janky
- Fixed a bug where if you created a shortcut of a start menu item it would have two extensions @adrwbln 
- The Icon Editor app has been moved to the System Tools group
- Fixed a bug where the Qlorb logo would not show up in Qlorb
- The folders in the start menu now also have a new context menu
- You can now toggle on and off the actions found in the start menu bottom bar.
- You now have the option to only show the opened apps of the current workspace on the taskbar.
- The About page in the settings app has been updated
- ArcOS will now throw an error if methods like `closeIfSecondInstance` are executed in the wrong process state.

> ArcOS 7.0.8 has been deployed to the servers on December 31st, 2025, at 19:04, counting 2380 modules.

## TPA Changes
ArcOS 7.0.8 fundamentally changes the way third-party applications are implemented. For starters, direct access to the user daemon, processes and kernel modules has been completely removed. This means that most every third-party application online on the store right now will no longer run, because they all use `+env.get("shell_pid")` to get the shell's PID, but the `env` kernel module isn't immediately accessible anymore.

### What this means for TPAs
The permission system isn't refined yet. There isn't a proper dialog to ask for permission, and the amount of APIs that the permission system grants access to is still negligible. Most applications can be fixed by simply removing the first line (`const shellPid = +env.get("shell_pid");`) and replacing `shellPid` in the `spawnApp` call with `SHELL_PID`.

Documentation is also still on its way, there's a lot of stuff to write, and we're all very busy. The permission system should be ready, documentation and all, by ArcOS 7.0.9, maybe 7.0.10.

## Versioning
We've decided to keep ArcOS as "beta" until ArcOS 7.1.0 comes out. This means that ArcOS API's (including those accessed by third-party applications) can be fundamentally rewritten between releases, and there's no guarantee what will stay as is. However, when ArcOS does reach 7.1.0, the methods and APIs will be set in stone, and the methods can only be removed if they're no longer in use and marked as deprecated long before removal.

## On a personal note
2025 has been a crazy year. Not just for ArcOS, but also for myself. I'm busier than ever, whilst still trying my best to work on ArcOS as much as possible. I want to thank all of you for the support and curiosity we've seen over the past year. Alongside that, I also want to thank the three developers that work by my side: @allucat1000, @adrwbln , @logan.games . These people have helped with smaller tasks so that I could get the big things done in between real-life obligations. They're invaluable.