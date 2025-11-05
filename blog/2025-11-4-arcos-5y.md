# ArcOS turned 5!

_November 4th, 2025. Somewhere in the Universe._

Quite honestly, I didn't think it would last this long. ArcOS turned 5 years old today! I used to call ArcOS a weekend project gone out of hand, but it's evolved far beyond that.

## WebOS v1 -- The beginning of this madness

I started ArcOS rather impulsively. On November 4th 2020, I ran into an error page at school, that had a menu bar at the top of the page that kind of resembled MacOS. I immediately thought it would be a great idea to repurpose that webpage to create a web interface for the people of my home to access their resources on my server. If you want to know the real reason why I started ArcOS, there you go.

When I started, ArcOS wasn't called ArcOS. I named it WebOS, which makes sense, after all it is an operating system on the web, why wouldn't you name it that? The first version, which I'll call v1 from now on, was just a couple HTML pages strung together using anchors. There were no movable windows, no boot screen, login screen or any real app at all. Truthfully, v1 was killed off long before it had the opportunity to blossom into something that resembles an operating system.

The development of v1 stopped in part because I didn't have nearly enough experience to create a project as advanced as what I had in mind; my JS skills were essentially nonexistent at this point. I had experimented with it in the past, but nothing as significant as this.

## WebOSv2 -- Apache

A month later, on December 13th 2020, I started on WebOSv2. My motivation for starting on v2 was a w3schools article I ran into that allowed me to make windows that you can drag around. v2 was one of the earliest web development projects I built from scratch. Before this point I just copied existing sites (no really, I _copied_ them using Ctrl+S in Chrome), modified them, and called it a day. I simply didn't have the knowledge required to pull off a good looking site myself, so I copied stuff like ZorinOS.com, Speedtest.net, Microsoft Login, and others.

WebOSv2 had a boot screen, login screen, and a fully fledged desktop. The taskbar, start menu and window designs were based off of Windows XP, because as I've said a lot in the past, I like XP. Back when I worked on it, I even had a file manager using a heavily modified Apache findx template, which allowed me to recreate a Windows-XP-like file explorer.

After working on v2 for about a month, I stopped. I had lost all inspiration for the project, and I embarked on other projects. My goal for 2021 was to learn C#, so that's what I did. C# took the lead, and no other projects or languages got close. I built a lot of amazing C# projects during this time, but nothing that even remotely came close to an operating-system-like experience.

## WebOSv3 -- Electron

In late February of 2021, I came across Electron; a project that allows you to create multi-platform desktop apps using web technologies. I watched a couple videos about it, and decided to give it a try. This is also the first time I really touched Node.js at all. I had a go at creating my own custom titlebar, some styling, and then I wanted to create a setup application. What for? Nothing. I just liked the idea of an Electron setup wizard.

Because of my previous project, the folder I was working in to create the setup wizard was called `TitlebarHandMadeTest`. After creating the first page of this wizard, I realized that it looked a lot like a login page for an operating system. Can you guess where this is going? Ofcourse, WebOSv3. I still look back at this project every day with a smile on my face. It started really simple, once again with a boot screen. However, I decided to make a multi-user system, which marks the first user system inside of ArcOS. This approach used localStorage, and was used until right before the release of ArcOS 5.0.0.

v3 had a lot more applications, and was the first version of the OS that focused on personalization. You can still see this by downloading and installing v3, but the basic idea was that I wanted to give my users the option to customize their experience to their exact demands. I added themes, taskbar positions, stuff like that. I even added a file manager that allowed you to view the files on your actual device. This was possible because Electron had `nodeIntegration` turned **on**, meaning that you could access node packages and do whatever you wanted.

At this point, ArcOS was still called WebOS. However, that was about to change. It came to my attention that other projects exist with the WebOS name, and that I have to change it to maintain the originality I was hoping to accomplish. So, I looked at the technological stack I was working with:

> Electron -> Electricity -> Electricity arks -> Arc -> ArcOS

## WebOSv4 -- A new name: ArcOS

ArcOS' name comes from Electron, which ofcourse was the foundation for WebOSv3 and v4. I started working on v4 on July 6th 2021, a couple of months after v3. This new version actually didn't rewrite anything; it was simply just a visual refresh of the OS. We went from gray, utilitarian styling to a modern UI with fancy glass surfaces.

Finding an original name wasn't easy. In fact, ArcOS is found in all kinds of sectors across the internet, so it really isn't any more original than WebOS. However, I've since committed to the name, and many attempts to replace it with something better have ultimately failed.

On March 6th, 2022, ArcOS v4 seized development. I had undergone many refactors and codebase cleanups, but the architectural design of ArcOS was fundamentally flawed, and it wasn't fun to work on at all. The last version of v4 was revision 19 (r19) and released on December 19th, 2021.

## ArcOS v5 -- Svelte!

After leaving the project behind for a couple months, I felt the urge to give it another go. I had been learning Svelte; a lightweight Javascript framework that makes web development so simple, it's almost embarrassing. Anyway, given what I knew about Svelte 3 at the time, I decided to give creating an OS in it a shot. On July 6th, 2022, exactly one year after v4, I started working on v5. I moved away from the land of Electron and node integration, so I had to figure out another way to store files and users, so I created ArcAPI: a backend for ArcOS, which stores all the data inside of ArcOS, even now.

v5 ran for a long time. It started as a test in July, but grew quickly into something of a monstrosity as people came onto the project to help. In June of 2023, I started reeling in community members, and even established a team, with whom I worked on expanding ArcOS into a professional web operating system.

ArcOS v5 is also the first version of ArcOS to receive extensive designs for its UI. I always winged the designs for ArcOS, until v5. About 30% of the UI in ArcOS v5 was designed in Figma beforehand (man, Figma is amazing).

In v5 and above we also had bug reports; if ArcOS crashed (which it could do, and still can), a bug report would be constructed from various metadata and sent off to the BugRep server, a dedicated Pocketbase server. On the other side of this was an administrator frontend that team members could access to look at, analyze and fix bugs.

Finally, v5 also had a bunch of new ArcTerm functionality, like custom scripts, prompts, and goose bumps. This stuff was mostly just gimmicks; stuff added to v5 because I wanted to experiment with it.

## ArcOS v6 -- Processes

After working on v5 for over a year, I started to notice that it became quite a mess internally. I didn't really ever rewrite or refactor anything inside the codebase, so there was a whole ton of redundant old code that in many cases wasn't even used anymore. Despite that though, it wasn't the primary reason why I cut off v5. The real reason was a lack of processes; the apps inside of ArcOS could only run once up to this point (except for the message box, that one could be replicated multiple times in v3 and above). This meant that if you wanted to edit two text files at once, you couldn't. You'd have to finish your work in the first file, close it, and then open the second file.

ArcOS v6 had a fresh design, and was focused on professionalism from the very beginning. I had one main objective: create an operating system that would last me a long time and that resembled an actual bare metal OS, creating the illusion that it isn't just a website. I accomplished this by using compact margins, consistent paddings, and logical details like borders and font sizes.

With v6 also came the age of usability. I tried my best to make ArcOS v6 run as smoothly as possible across multiple browsers. I also created a Help Center that contained how-to information for every app. I wanted to make ArcOS as easy to use as possible so that truly anyone could sit down and use it.

Over all, ArcOS v6 was a far more polished experience than its predecessors. It's the first version of ArcOS that I consider professional and respectable, even if it still wasn't even close to perfect. The bugs and imperfections of v6 are all because of me; I lost motivation after less than a year of working on v6, and I terminated the ArcOS project prematurely on June 27th 2024. I intended to keep it going as a background project, but the motivation was completely drained. ArcOS v6 was the shortest running version of ArcOS after v2, having only been in active development for about 7 months.

So that's the end right? ArcOS, terminated prematurely, even before the 4 year mark was reached. That was my idea. Terminate ArcOS to focus on other projects at hand, like Sacruda and Inepta. I wanted to let go of this tradition of endlessly building upon the same basic principle of creating a WebOS, better than the last. I wanted to break the chain by completely obliterating a motivational deadspace in my head, and the only way I ever saw that happening was by ending ArcOS.

### So that's it?

Well, no. Despite my initial resolution to kill off ArcOS with no return, it deemed impossible for me to just rid myself of my life's work. In a post I wrote: "I'm sure I'm not the first person to tell you that you can't just kill off your life's work, a project into which you've poured literal years of hard work. You can't let such a project disappear in the endless void of history." Words of wisdom.

And so, On January 1st, 2025, I was at my friend's place after celebrating newyear from 1 am to 7 am, and I started working on the WaveKernel; the custom Typescript kernel that powers all of ArcOS v7. Why is it called WaveKernel? Because I wanted to name ArcOS WaveOS or DeskWave, but NOT ArcOS. I wanted to let that name disappear into a never ending void. However, this was a very indecisive project, switching between names constantly. I made commits like "Okay it's called ArcOS now", "I can't decide on a name and it's painful" and "Back to ArcOS". I switched around a couple times, eventually coming back to a name I concocted in 2021. It's in some ways annoying that I can't beat my 14yr-old self, but oh well.

## ArcOS v7 -- The era of ReArc

v7 is internally called ReArc, because I didn't know what the actual name of the project was going to be when I started. The backend is subsequently named `ReArc-Backend-v1` on GitHub for the same reason. It's also why the kernel is called the WaveKernel, and not `ArcKernel`, `ReArcernel` or anything like that. ArcOS v7 doesn't port anything. It is completely and utterly incompatible with ArcOS v6 and below, sharing no similarities in the infrastructure, backend, frontend, anything. Like in my post: "On January 1st 2025 I decided to continue the ArcOS project solo after having abandoned my team months prior. I'm planning to release ArcOS v7 in 2025: an effectively reimagined version of the operating system with zero similarities with its predecessors."

This new (and likely final) codebase has a bunch of features I couldn't dream of before. I always wanted to add third-party apps to ArcOS, so I finally did in v7. I wanted 2FA, so I added that too. I wanted a dedicated administrative suite for my admins to properly moderate the server, with scopes and all, so I added that also. I wanted an over complicated foundation, so complex that nobody ever dares to modify it, so I made it. I wanted an app store so that people can create and publish apps for other users, so I did that.

ArcOS v7 is gigantic, and growing by the day. At the time of writing, on the frontend we're at 1678 commits on the main branch, and 63 branches in total. On the backend we're at 378 commits. The frontend has 93936 lines of code, and the backend 15755, putting the total picture far above 100k LOC. That's a number I wouldn't even believe a couple of years ago, I was amazed at WebOSv3 having 3000 lines of code. TOTAL.

Why so many branches? Because I've once again established a team. I realized that working on ArcOS on my own wouldn't help sustainability in any way, so I reeled some people in to develop with me, using a scrum-based system for keeping track of the tasks at hand, and committing the changes to branches which are then submitted as pull requests.

ArcOS v7 is focused on modularity, maintainability and expandability. This is evident when looking at the third-party apps, filesystem-based configuration files, and the various baselayers like services and kernel modules. Everything in ArcOS can be swapped out with other things, and with a minimal amount of corrections, ArcOS will keep functioning just fine.

I've also added a bunch of error handling so that apps themselves can no longer intentionally crash the operating system. I did this by separating the built-in apps in the project into their own JS modules, so that I could use a stack trace parser to determine what app caused the crash by parsing the URL.

Finally, the design. ArcOS v7 has a bunch of designs, I'd say that about half of ArcOS' UI is designed beforehand in Figma. The frame number in our Figma file is at 463. That is JUST ArcOS v7. v5 and v6 had their own figma file. v7 is worked out as a mission critical thing because I am working towards this repository lasting for the next couple years. It would be nice to one day compile ArcOS using TypeScript Native, you know.

## So THAT is it.

After 5 years of amazing progress, tons upon tons of headaches and a lot of confusion: ArcOS. A project into which I've poured thousands upon thousands of hours. It has been a real journey to have embarked on. After five years, I can't really call it a weekend project anymore, can I?

## What's next?

ArcOS has been in development for 5 years, but I'm not stopping anytime soon. ArcOS v7 has been a joy to work on from the very beginning, and despite my extremely busy life, I promise to keep ArcOS development going for as long as I can. ArcOS version 7.0.8 is set to release later this month, so stay tuned for tons of new features and improvements. It's truly a stunning update.

---

I want to thank everyone for sticking with me through this journey. Special thanks goes out to my team of amazing people, who make v7 possible each and every day; @logan.games, @allucat1000, @oanblu, and ofcourse, @eversiege. We've been through a lot over the past couple years, but you guys help a lot. Ofcourse, there were team members before v7: @niknikovsky, @sawrams, @nulqwy, and blockyheadman.

Another thanks goes out to my userbase. ArcOS doesn't have a ton of users, I know, but hopefully that'll change with time. Something about focusing on the journey, not the destination.

The knowledge I've gained throughout the years of developing this project is immense, but none of that would have been possible without the incredible amount of guidance and support that @keesvv gave me from very early on. Javascript and even C# would still be a mystery if it wasn't for him.

---

I've been rambling for long enough. Let's raise a glass to another five years!

Izaak Kuipers, November 4th 2025, 9:42 PM.
