---
title: Planning front-end application
description: Few steps to plan front end application
date: "2019-05-03"
image: "picture.jpg"
tags: ["frontend"]
---

Base on [Cody Lindley great talk on planning FE application](https://www.youtube.com/watch?v=XskMWBXNbp0&t=2s)

1. `Verify you have working and stable API. Document, build and test API first`
2. `Select software management tools`  
   Ticketing bugs & version control systems (github)  
   Document storage (conceptboard)  
   Team communication (slack)  
   Task management (trello)
3. `Create a foundational specification`  
   Which devices  
   Min. resolution (laptop, 1024x768)  
   Which OS/browsers (OSX, WIN10, Safari, Chrome)  
   Which langauages  
   Which cultures  
   Should it work offline?  
   SEO strategy  
   Accesibility standards (sectiion 508 & WAI-ARIA 1.0)
4. `Select a software development process`  
   Pick one that works (agile, kanban, XP etc.)  
   You can pick stuff that works for Your team from different processes: standups daily(discuss, plan), prioritizing tasks, pick tasks you can accomplish by week/2 weeks end
5. `Select host platform & hosting service`  
   F.e. Node.js & modulus
6. `Select package managers (npm, bower, yarn)`
7. `Select site & user analytics`  
   Segment.io to install:  
   chartbeat.com
   mixpanel.com
   Thanks to that you can easily add third-party analytics application
8. `Select code & style enforcement`  
   csslint, HTMLhint, JShint, JSCS
9. `Select task runner`  
   gulp.js & plugins
10. `Select application architecture/structure:`  
    MV / app structure / routing (angular, react, vue)  
    Dependency management  
    Pre-built widgets/components
11. `Select testing methodologies & tools`  
    Test runner / test framework / assertions / mocking (karma + mocha + chai + sinon.js)  
    Functional testing (browserstack + nightwatch)
12. `Select code quality/complexity tools (complexityReport.js, plato)`
13. `Define deployment strategy (CI using travis-ci)`
14. `Select package monitoring solution (gemnasium)`
15. `JS error monitoring solution (use segment.io to install sentry.io)`
16. `Select uptime & performance monitoring solution`  
    Use segment.io to install pingdom
17. `Consider adding e2e/integration testing tool`  
    [Cypress.io is a great tool for that](https://www.cypress.io/)
18. `Consider adding visua testing tool`  
    [Percy.io](https://percy.io/)
