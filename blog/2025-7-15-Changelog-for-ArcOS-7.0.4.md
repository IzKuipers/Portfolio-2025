- Removed `application/pdf` from the PDF viewer's handlers to stop it from opening EXE files
- Fixed some crashes and bugs related to the messages app
- `crtpa` has been deprecated and removed in favour of ArcOS' `v7cli`.
- The "Feedback?" links no longer show up on third-party apps
- Bug reports no longer have the `resolved` state, just `closed`.
- Added MacOS-derived traffic lights: turn them on in **Settings** -> **Visuals**
- You can now press `r` on the crash screen to restart
- I've begun rolling out the App Store: it allows you to distribute apps you made to other ArcOS users. There's also the `pkg` command in ArcTerm, which is the command-line equivalent.
- Added some cursor movement varialbes to ArcTerm: `CURUP`, `CURDOWN`, `CURLEFT`, `CURRIGHT`, `CLRROW`
- Fixed visual glitches related to broad accent colors
- ArcTerm's configuration file has been moved to `U:/Config/ArcTerm/arcterm.conf`
- App icons will now properly render if you just freshly installed an app
- The temporary filesystem will be reset if you log out to fix a security vulnerability
- The start menu bottom panel will no longer overflow when using a different font
- HTML links will now be intercepted by ArcOS to stop them from redirecting
- The login routine has been optimised to log you in faster
- ArcTerm's scroll-back has been changed from -1 to 999999
- ArcOS services no longer have a manual activation: it's all done during process startup now
- The user daemon will no longer crash ArcOS if a wallpaper can't be found
- The titlebar has been partially rewritten to no longer overflow in any direction
- The `Location Unavailable` spam some users experienced in the file manager has been fixed

---

July 15th 2025, 3:11 AM
