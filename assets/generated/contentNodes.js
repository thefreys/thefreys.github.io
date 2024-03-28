export const contentNodes = {
"/":{
  "parent":null,
  "title":`Welcome  `,
  "navLabel":"Welcome  ",
  "children":[
    "/_test",
    "/activities",
    "/blogs",
    "/coding",
    "/digital-curation",
    "/img",
    "/recipes",
    "/sitemap",
    "/upcycling",
  ],
},
"/_test":{
  "parent":"/",
  "navLabel":"_test",
  "children":[
    "/_test/ancestor-demo",
  ],
},
"/_test/ancestor-demo":{
  "parent":"/_test",
  "navLabel":"ancestor-demo",
  "children":[
    "/_test/ancestor-demo/demo-child",
  ],
},
"/_test/ancestor-demo/demo-child":{
  "parent":"/_test/ancestor-demo",
  "title":`Child`,
  "navLabel":"Child",
  "children":[
    "/_test/ancestor-demo/demo-child/demo-grand-child",
  ],
},
"/_test/ancestor-demo/demo-child/demo-grand-child":{
  "parent":"/_test/ancestor-demo/demo-child",
  "title":`Grand Child`,
  "navLabel":"Grand Child",
  "children":[
    "/_test/ancestor-demo/demo-child/demo-grand-child/demo-great-grand-child",
  ],
},
"/_test/ancestor-demo/demo-child/demo-grand-child/demo-great-grand-child":{
  "parent":"/_test/ancestor-demo/demo-child/demo-grand-child",
  "title":`Great Grand Child`,
  "navLabel":"Great Grand Child",
  "children":[
  ],
},
"/activities":{
  "parent":"/",
  "navLabel":"activities",
  "children":[
    "/activities/asking-ai",
    "/activities/camping",
  ],
},
"/activities/asking-ai":{
  "parent":"/activities",
  "navLabel":"asking-ai",
  "children":[
    "/activities/asking-ai/crafty",
    "/activities/asking-ai/technical",
  ],
},
"/activities/asking-ai/crafty":{
  "parent":"/activities/asking-ai",
  "navLabel":"crafty",
  "children":[
    "/activities/asking-ai/crafty/how-do-you-make-t-shirt-yarn",
  ],
},
"/activities/asking-ai/crafty/how-do-you-make-t-shirt-yarn":{
  "parent":"/activities/asking-ai/crafty",
  "title":`How do you make t-shirt yarn?`,
  "navLabel":"How do you make t-shirt yarn?",
  "children":[
    "/activities/asking-ai/crafty/how-do-you-make-t-shirt-yarn/bard",
    "/activities/asking-ai/crafty/how-do-you-make-t-shirt-yarn/bing",
    "/activities/asking-ai/crafty/how-do-you-make-t-shirt-yarn/chatgpt",
  ],
},
"/activities/asking-ai/crafty/how-do-you-make-t-shirt-yarn/bard":{
  "parent":"/activities/asking-ai/crafty/how-do-you-make-t-shirt-yarn",
  "title":`what Bard said`,
  "navLabel":"what Bard said",
  "children":[
  ],
},
"/activities/asking-ai/crafty/how-do-you-make-t-shirt-yarn/bing":{
  "parent":"/activities/asking-ai/crafty/how-do-you-make-t-shirt-yarn",
  "title":`what Bing said`,
  "navLabel":"what Bing said",
  "children":[
  ],
},
"/activities/asking-ai/crafty/how-do-you-make-t-shirt-yarn/chatgpt":{
  "parent":"/activities/asking-ai/crafty/how-do-you-make-t-shirt-yarn",
  "title":`what ChatGPT said`,
  "navLabel":"what ChatGPT said",
  "children":[
  ],
},
"/activities/asking-ai/technical":{
  "parent":"/activities/asking-ai",
  "navLabel":"technical",
  "children":[
    "/activities/asking-ai/technical/list-files-from-a-terminal",
    "/activities/asking-ai/technical/most-common-term-for-writing-computer-code",
    "/activities/asking-ai/technical/no-cost-website-hosts",
    "/activities/asking-ai/technical/shell-scripting",
    "/activities/asking-ai/technical/sitemap-file-format-preferred-by-search-engines",
    "/activities/asking-ai/technical/trim-file-leading-trailing-whitespace",
  ],
},
"/activities/asking-ai/technical/list-files-from-a-terminal":{
  "parent":"/activities/asking-ai/technical",
  "title":`How do you list files from a terminal?`,
  "navLabel":"How do you list files from a terminal?",
  "children":[
    "/activities/asking-ai/technical/list-files-from-a-terminal/bing",
  ],
},
"/activities/asking-ai/technical/list-files-from-a-terminal/bing":{
  "parent":"/activities/asking-ai/technical/list-files-from-a-terminal",
  "title":`what Bing said`,
  "navLabel":"what Bing said",
  "children":[
  ],
},
"/activities/asking-ai/technical/most-common-term-for-writing-computer-code":{
  "parent":"/activities/asking-ai/technical",
  "title":`What is the most common term for writing computer code?`,
  "navLabel":"What is the most common term for writing computer code?",
  "children":[
    "/activities/asking-ai/technical/most-common-term-for-writing-computer-code/bard",
    "/activities/asking-ai/technical/most-common-term-for-writing-computer-code/bing",
    "/activities/asking-ai/technical/most-common-term-for-writing-computer-code/chatgpt",
  ],
},
"/activities/asking-ai/technical/most-common-term-for-writing-computer-code/bard":{
  "parent":"/activities/asking-ai/technical/most-common-term-for-writing-computer-code",
  "title":`what Bard said`,
  "navLabel":"what Bard said",
  "children":[
  ],
},
"/activities/asking-ai/technical/most-common-term-for-writing-computer-code/bing":{
  "parent":"/activities/asking-ai/technical/most-common-term-for-writing-computer-code",
  "title":`what Bing said`,
  "navLabel":"what Bing said",
  "children":[
  ],
},
"/activities/asking-ai/technical/most-common-term-for-writing-computer-code/chatgpt":{
  "parent":"/activities/asking-ai/technical/most-common-term-for-writing-computer-code",
  "title":`what ChatGPT said`,
  "navLabel":"what ChatGPT said",
  "children":[
  ],
},
"/activities/asking-ai/technical/no-cost-website-hosts":{
  "parent":"/activities/asking-ai/technical",
  "title":`Please list 10 places to host a website for free`,
  "navLabel":"Please list 10 places to host a website for free",
  "children":[
    "/activities/asking-ai/technical/no-cost-website-hosts/bard",
    "/activities/asking-ai/technical/no-cost-website-hosts/bing",
    "/activities/asking-ai/technical/no-cost-website-hosts/chatgpt",
  ],
},
"/activities/asking-ai/technical/no-cost-website-hosts/bard":{
  "parent":"/activities/asking-ai/technical/no-cost-website-hosts",
  "navLabel":"bard",
  "children":[
  ],
},
"/activities/asking-ai/technical/no-cost-website-hosts/bing":{
  "parent":"/activities/asking-ai/technical/no-cost-website-hosts",
  "navLabel":"bing",
  "children":[
  ],
},
"/activities/asking-ai/technical/no-cost-website-hosts/chatgpt":{
  "parent":"/activities/asking-ai/technical/no-cost-website-hosts",
  "navLabel":"chatgpt",
  "children":[
  ],
},
"/activities/asking-ai/technical/shell-scripting":{
  "parent":"/activities/asking-ai/technical",
  "navLabel":"shell-scripting",
  "children":[
    "/activities/asking-ai/technical/shell-scripting/bash",
  ],
},
"/activities/asking-ai/technical/shell-scripting/bash":{
  "parent":"/activities/asking-ai/technical/shell-scripting",
  "navLabel":"bash",
  "children":[
    "/activities/asking-ai/technical/shell-scripting/bash/list-git-repo-files-with-commit-date",
  ],
},
"/activities/asking-ai/technical/shell-scripting/bash/list-git-repo-files-with-commit-date":{
  "parent":"/activities/asking-ai/technical/shell-scripting/bash",
  "title":`Please write a bash script to list all the files in a local clone of a git repository with their last commit date`,
  "navLabel":"Please write a bash script to list all the files in a local clone of a git repository with their last commit date",
  "children":[
    "/activities/asking-ai/technical/shell-scripting/bash/list-git-repo-files-with-commit-date/bard",
    "/activities/asking-ai/technical/shell-scripting/bash/list-git-repo-files-with-commit-date/bing",
    "/activities/asking-ai/technical/shell-scripting/bash/list-git-repo-files-with-commit-date/chatgpt",
  ],
},
"/activities/asking-ai/technical/shell-scripting/bash/list-git-repo-files-with-commit-date/bard":{
  "parent":"/activities/asking-ai/technical/shell-scripting/bash/list-git-repo-files-with-commit-date",
  "navLabel":"bard",
  "children":[
  ],
},
"/activities/asking-ai/technical/shell-scripting/bash/list-git-repo-files-with-commit-date/bing":{
  "parent":"/activities/asking-ai/technical/shell-scripting/bash/list-git-repo-files-with-commit-date",
  "navLabel":"bing",
  "children":[
  ],
},
"/activities/asking-ai/technical/shell-scripting/bash/list-git-repo-files-with-commit-date/chatgpt":{
  "parent":"/activities/asking-ai/technical/shell-scripting/bash/list-git-repo-files-with-commit-date",
  "navLabel":"chatgpt",
  "children":[
  ],
},
"/activities/asking-ai/technical/sitemap-file-format-preferred-by-search-engines":{
  "parent":"/activities/asking-ai/technical",
  "title":`I need to know the file format for the sitemap file that each search engine prefers`,
  "navLabel":"I need to know the file format for the sitemap file that each search engine prefers",
  "children":[
    "/activities/asking-ai/technical/sitemap-file-format-preferred-by-search-engines/bard",
    "/activities/asking-ai/technical/sitemap-file-format-preferred-by-search-engines/bing",
    "/activities/asking-ai/technical/sitemap-file-format-preferred-by-search-engines/chatgpt",
  ],
},
"/activities/asking-ai/technical/sitemap-file-format-preferred-by-search-engines/bard":{
  "parent":"/activities/asking-ai/technical/sitemap-file-format-preferred-by-search-engines",
  "title":`what Bard said`,
  "navLabel":"what Bard said",
  "children":[
  ],
},
"/activities/asking-ai/technical/sitemap-file-format-preferred-by-search-engines/bing":{
  "parent":"/activities/asking-ai/technical/sitemap-file-format-preferred-by-search-engines",
  "title":`what Bing said`,
  "navLabel":"what Bing said",
  "children":[
  ],
},
"/activities/asking-ai/technical/sitemap-file-format-preferred-by-search-engines/chatgpt":{
  "parent":"/activities/asking-ai/technical/sitemap-file-format-preferred-by-search-engines",
  "title":`what ChatGPT said`,
  "navLabel":"what ChatGPT said",
  "children":[
  ],
},
"/activities/asking-ai/technical/trim-file-leading-trailing-whitespace":{
  "parent":"/activities/asking-ai/technical",
  "title":`In bash, how do I trim the contents of a file of leading and trailing whitespace and then write it back?`,
  "navLabel":"In bash, how do I trim the contents of a file of leading and trailing whitespace and then write it back?",
  "children":[
    "/activities/asking-ai/technical/trim-file-leading-trailing-whitespace/bard",
    "/activities/asking-ai/technical/trim-file-leading-trailing-whitespace/bing",
    "/activities/asking-ai/technical/trim-file-leading-trailing-whitespace/chatgpt",
  ],
},
"/activities/asking-ai/technical/trim-file-leading-trailing-whitespace/bard":{
  "parent":"/activities/asking-ai/technical/trim-file-leading-trailing-whitespace",
  "title":`what Bard said`,
  "navLabel":"what Bard said",
  "children":[
  ],
},
"/activities/asking-ai/technical/trim-file-leading-trailing-whitespace/bing":{
  "parent":"/activities/asking-ai/technical/trim-file-leading-trailing-whitespace",
  "title":`what Bing said`,
  "navLabel":"what Bing said",
  "children":[
  ],
},
"/activities/asking-ai/technical/trim-file-leading-trailing-whitespace/chatgpt":{
  "parent":"/activities/asking-ai/technical/trim-file-leading-trailing-whitespace",
  "title":`what ChatGPT said`,
  "navLabel":"what ChatGPT said",
  "children":[
  ],
},
"/activities/camping":{
  "parent":"/activities",
  "navLabel":"camping",
  "children":[
    "/activities/camping/campground-notes",
    "/activities/camping/food-ideas",
    "/activities/camping/fun-ideas",
    "/activities/camping/gear-checklist",
    "/activities/camping/sample-trip",
  ],
},
"/activities/camping/campground-notes":{
  "parent":"/activities/camping",
  "title":`Campground Notes`,
  "navLabel":"Campground Notes",
  "children":[
  ],
},
"/activities/camping/food-ideas":{
  "parent":"/activities/camping",
  "title":`Food Ideas`,
  "navLabel":"Food Ideas",
  "children":[
  ],
},
"/activities/camping/fun-ideas":{
  "parent":"/activities/camping",
  "title":`Fun ideas`,
  "navLabel":"Fun ideas",
  "children":[
  ],
},
"/activities/camping/gear-checklist":{
  "parent":"/activities/camping",
  "title":`Gear Checklist`,
  "navLabel":"Gear Checklist",
  "children":[
  ],
},
"/activities/camping/sample-trip":{
  "parent":"/activities/camping",
  "title":`Sample Trip`,
  "navLabel":"Sample Trip",
  "children":[
  ],
},
"/blogs":{
  "parent":"/",
  "navLabel":"blogs",
  "children":[
    "/blogs/kristy",
  ],
},
"/blogs/kristy":{
  "parent":"/blogs",
  "navLabel":"kristy",
  "children":[
    "/blogs/kristy/2023",
    "/blogs/kristy/2024",
  ],
},
"/blogs/kristy/2023":{
  "parent":"/blogs/kristy",
  "navLabel":"2023",
  "children":[
    "/blogs/kristy/2023/11",
    "/blogs/kristy/2023/12",
  ],
},
"/blogs/kristy/2023/11":{
  "parent":"/blogs/kristy/2023",
  "title":`November`,
  "navLabel":"November",
  "children":[
    "/blogs/kristy/2023/11/01",
  ],
},
"/blogs/kristy/2023/11/01":{
  "parent":"/blogs/kristy/2023/11",
  "navLabel":"01",
  "children":[
    "/blogs/kristy/2023/11/01/markdown-cheat-sheet",
  ],
},
"/blogs/kristy/2023/11/01/markdown-cheat-sheet":{
  "parent":"/blogs/kristy/2023/11/01",
  "navLabel":"markdown-cheat-sheet",
  "children":[
  ],
},
"/blogs/kristy/2023/12":{
  "parent":"/blogs/kristy/2023",
  "title":`December`,
  "navLabel":"December",
  "children":[
    "/blogs/kristy/2023/12/01",
  ],
},
"/blogs/kristy/2023/12/01":{
  "parent":"/blogs/kristy/2023/12",
  "navLabel":"01",
  "children":[
    "/blogs/kristy/2023/12/01/bootstrap-reference",
  ],
},
"/blogs/kristy/2023/12/01/bootstrap-reference":{
  "parent":"/blogs/kristy/2023/12/01",
  "title":`Referencing and Testing Bootstrap`,
  "navLabel":"Referencing and Testing Bootstrap",
  "children":[
  ],
},
"/blogs/kristy/2024":{
  "parent":"/blogs/kristy",
  "navLabel":"2024",
  "children":[
    "/blogs/kristy/2024/01",
    "/blogs/kristy/2024/02",
    "/blogs/kristy/2024/03",
  ],
},
"/blogs/kristy/2024/01":{
  "parent":"/blogs/kristy/2024",
  "title":`January`,
  "navLabel":"January",
  "children":[
    "/blogs/kristy/2024/01/20",
  ],
},
"/blogs/kristy/2024/01/20":{
  "parent":"/blogs/kristy/2024/01",
  "navLabel":"20",
  "children":[
    "/blogs/kristy/2024/01/20/finding-new-recipes-to-try",
  ],
},
"/blogs/kristy/2024/01/20/finding-new-recipes-to-try":{
  "parent":"/blogs/kristy/2024/01/20",
  "navLabel":"finding-new-recipes-to-try",
  "children":[
  ],
},
"/blogs/kristy/2024/02":{
  "parent":"/blogs/kristy/2024",
  "title":`February`,
  "navLabel":"February",
  "children":[
    "/blogs/kristy/2024/02/10",
    "/blogs/kristy/2024/02/11",
    "/blogs/kristy/2024/02/14",
    "/blogs/kristy/2024/02/15",
    "/blogs/kristy/2024/02/19",
  ],
},
"/blogs/kristy/2024/02/10":{
  "parent":"/blogs/kristy/2024/02",
  "navLabel":"10",
  "children":[
    "/blogs/kristy/2024/02/10/scammers-gonna-scam",
  ],
},
"/blogs/kristy/2024/02/10/scammers-gonna-scam":{
  "parent":"/blogs/kristy/2024/02/10",
  "title":`Scammers gonna scam`,
  "navLabel":"Scammers gonna scam",
  "children":[
    "/blogs/kristy/2024/02/10/scammers-gonna-scam/AI-answers",
  ],
},
"/blogs/kristy/2024/02/10/scammers-gonna-scam/AI-answers":{
  "parent":"/blogs/kristy/2024/02/10/scammers-gonna-scam",
  "title":`Featured Snippets according to AI on February 10, 2024`,
  "navLabel":"Featured Snippets according to AI on February 10, 2024",
  "children":[
    "/blogs/kristy/2024/02/10/scammers-gonna-scam/AI-answers/bing",
    "/blogs/kristy/2024/02/10/scammers-gonna-scam/AI-answers/chatgpt",
    "/blogs/kristy/2024/02/10/scammers-gonna-scam/AI-answers/gemini",
  ],
},
"/blogs/kristy/2024/02/10/scammers-gonna-scam/AI-answers/bing":{
  "parent":"/blogs/kristy/2024/02/10/scammers-gonna-scam/AI-answers",
  "title":`Response from Bing Copilot`,
  "navLabel":"Response from Bing Copilot",
  "children":[
  ],
},
"/blogs/kristy/2024/02/10/scammers-gonna-scam/AI-answers/chatgpt":{
  "parent":"/blogs/kristy/2024/02/10/scammers-gonna-scam/AI-answers",
  "title":`Response from ChatGPT 3.5`,
  "navLabel":"Response from ChatGPT 3.5",
  "children":[
  ],
},
"/blogs/kristy/2024/02/10/scammers-gonna-scam/AI-answers/gemini":{
  "parent":"/blogs/kristy/2024/02/10/scammers-gonna-scam/AI-answers",
  "title":`Response from Gemini`,
  "navLabel":"Response from Gemini",
  "children":[
  ],
},
"/blogs/kristy/2024/02/11":{
  "parent":"/blogs/kristy/2024/02",
  "navLabel":"11",
  "children":[
    "/blogs/kristy/2024/02/11/google-analytics-query-string",
  ],
},
"/blogs/kristy/2024/02/11/google-analytics-query-string":{
  "parent":"/blogs/kristy/2024/02/11",
  "title":`Query String Values as Pages in Google Analytics`,
  "navLabel":"Query String Values as Pages in Google Analytics",
  "children":[
    "/blogs/kristy/2024/02/11/google-analytics-query-string/AI-answers",
  ],
},
"/blogs/kristy/2024/02/11/google-analytics-query-string/AI-answers":{
  "parent":"/blogs/kristy/2024/02/11/google-analytics-query-string",
  "title":`How multiple AIs answered`,
  "navLabel":"How multiple AIs answered",
  "children":[
    "/blogs/kristy/2024/02/11/google-analytics-query-string/AI-answers/bing",
    "/blogs/kristy/2024/02/11/google-analytics-query-string/AI-answers/chatgpt",
    "/blogs/kristy/2024/02/11/google-analytics-query-string/AI-answers/claude",
    "/blogs/kristy/2024/02/11/google-analytics-query-string/AI-answers/gemini",
  ],
},
"/blogs/kristy/2024/02/11/google-analytics-query-string/AI-answers/bing":{
  "parent":"/blogs/kristy/2024/02/11/google-analytics-query-string/AI-answers",
  "title":`Response from Bing Copilot`,
  "navLabel":"Response from Bing Copilot",
  "children":[
  ],
},
"/blogs/kristy/2024/02/11/google-analytics-query-string/AI-answers/chatgpt":{
  "parent":"/blogs/kristy/2024/02/11/google-analytics-query-string/AI-answers",
  "title":`Response from ChatGPT 3.5`,
  "navLabel":"Response from ChatGPT 3.5",
  "children":[
  ],
},
"/blogs/kristy/2024/02/11/google-analytics-query-string/AI-answers/claude":{
  "parent":"/blogs/kristy/2024/02/11/google-analytics-query-string/AI-answers",
  "title":`Response from Claude`,
  "navLabel":"Response from Claude",
  "children":[
  ],
},
"/blogs/kristy/2024/02/11/google-analytics-query-string/AI-answers/gemini":{
  "parent":"/blogs/kristy/2024/02/11/google-analytics-query-string/AI-answers",
  "title":`Response from Gemini`,
  "navLabel":"Response from Gemini",
  "children":[
  ],
},
"/blogs/kristy/2024/02/14":{
  "parent":"/blogs/kristy/2024/02",
  "navLabel":"14",
  "children":[
    "/blogs/kristy/2024/02/14/date-string-formats",
  ],
},
"/blogs/kristy/2024/02/14/date-string-formats":{
  "parent":"/blogs/kristy/2024/02/14",
  "title":`Date format strings`,
  "navLabel":"Date format strings",
  "children":[
    "/blogs/kristy/2024/02/14/date-string-formats/AI-answers",
  ],
},
"/blogs/kristy/2024/02/14/date-string-formats/AI-answers":{
  "parent":"/blogs/kristy/2024/02/14/date-string-formats",
  "title":`How multiple AIs answered`,
  "navLabel":"How multiple AIs answered",
  "children":[
    "/blogs/kristy/2024/02/14/date-string-formats/AI-answers/bing",
    "/blogs/kristy/2024/02/14/date-string-formats/AI-answers/chatgpt",
    "/blogs/kristy/2024/02/14/date-string-formats/AI-answers/claude",
    "/blogs/kristy/2024/02/14/date-string-formats/AI-answers/gemini",
  ],
},
"/blogs/kristy/2024/02/14/date-string-formats/AI-answers/bing":{
  "parent":"/blogs/kristy/2024/02/14/date-string-formats/AI-answers",
  "title":`Response from Bing Copilot`,
  "navLabel":"Response from Bing Copilot",
  "children":[
  ],
},
"/blogs/kristy/2024/02/14/date-string-formats/AI-answers/chatgpt":{
  "parent":"/blogs/kristy/2024/02/14/date-string-formats/AI-answers",
  "title":`Response from ChatGPT 3.5`,
  "navLabel":"Response from ChatGPT 3.5",
  "children":[
  ],
},
"/blogs/kristy/2024/02/14/date-string-formats/AI-answers/claude":{
  "parent":"/blogs/kristy/2024/02/14/date-string-formats/AI-answers",
  "title":`Response from Claude`,
  "navLabel":"Response from Claude",
  "children":[
  ],
},
"/blogs/kristy/2024/02/14/date-string-formats/AI-answers/gemini":{
  "parent":"/blogs/kristy/2024/02/14/date-string-formats/AI-answers",
  "title":`Response from Gemini`,
  "navLabel":"Response from Gemini",
  "children":[
  ],
},
"/blogs/kristy/2024/02/15":{
  "parent":"/blogs/kristy/2024/02",
  "navLabel":"15",
  "children":[
    "/blogs/kristy/2024/02/15/family-tree-as-web-page",
  ],
},
"/blogs/kristy/2024/02/15/family-tree-as-web-page":{
  "parent":"/blogs/kristy/2024/02/15",
  "title":`Representing a family tree in a web page`,
  "navLabel":"Representing a family tree in a web page",
  "children":[
    "/blogs/kristy/2024/02/15/family-tree-as-web-page/AI-answers",
  ],
},
"/blogs/kristy/2024/02/15/family-tree-as-web-page/AI-answers":{
  "parent":"/blogs/kristy/2024/02/15/family-tree-as-web-page",
  "title":`How multiple AIs answered`,
  "navLabel":"How multiple AIs answered",
  "children":[
    "/blogs/kristy/2024/02/15/family-tree-as-web-page/AI-answers/bing",
    "/blogs/kristy/2024/02/15/family-tree-as-web-page/AI-answers/chatgpt",
    "/blogs/kristy/2024/02/15/family-tree-as-web-page/AI-answers/claude",
    "/blogs/kristy/2024/02/15/family-tree-as-web-page/AI-answers/gemini",
  ],
},
"/blogs/kristy/2024/02/15/family-tree-as-web-page/AI-answers/bing":{
  "parent":"/blogs/kristy/2024/02/15/family-tree-as-web-page/AI-answers",
  "title":`Response from Bing Copilot`,
  "navLabel":"Response from Bing Copilot",
  "children":[
  ],
},
"/blogs/kristy/2024/02/15/family-tree-as-web-page/AI-answers/chatgpt":{
  "parent":"/blogs/kristy/2024/02/15/family-tree-as-web-page/AI-answers",
  "title":`Response from ChatGPT 3.5`,
  "navLabel":"Response from ChatGPT 3.5",
  "children":[
  ],
},
"/blogs/kristy/2024/02/15/family-tree-as-web-page/AI-answers/claude":{
  "parent":"/blogs/kristy/2024/02/15/family-tree-as-web-page/AI-answers",
  "title":`Response from Claude`,
  "navLabel":"Response from Claude",
  "children":[
  ],
},
"/blogs/kristy/2024/02/15/family-tree-as-web-page/AI-answers/gemini":{
  "parent":"/blogs/kristy/2024/02/15/family-tree-as-web-page/AI-answers",
  "title":`Response from Gemini`,
  "navLabel":"Response from Gemini",
  "children":[
  ],
},
"/blogs/kristy/2024/02/19":{
  "parent":"/blogs/kristy/2024/02",
  "navLabel":"19",
  "children":[
    "/blogs/kristy/2024/02/19/treeview",
  ],
},
"/blogs/kristy/2024/02/19/treeview":{
  "parent":"/blogs/kristy/2024/02/19",
  "title":`Nested unordered list as a treeview`,
  "navLabel":"Nested unordered list as a treeview",
  "children":[
    "/blogs/kristy/2024/02/19/treeview/AI-answers",
  ],
},
"/blogs/kristy/2024/02/19/treeview/AI-answers":{
  "parent":"/blogs/kristy/2024/02/19/treeview",
  "title":`How multiple AIs answered`,
  "navLabel":"How multiple AIs answered",
  "children":[
    "/blogs/kristy/2024/02/19/treeview/AI-answers/bing",
    "/blogs/kristy/2024/02/19/treeview/AI-answers/chatgpt",
    "/blogs/kristy/2024/02/19/treeview/AI-answers/claude",
    "/blogs/kristy/2024/02/19/treeview/AI-answers/gemini",
  ],
},
"/blogs/kristy/2024/02/19/treeview/AI-answers/bing":{
  "parent":"/blogs/kristy/2024/02/19/treeview/AI-answers",
  "title":`Response from Bing Copilot`,
  "navLabel":"Response from Bing Copilot",
  "children":[
  ],
},
"/blogs/kristy/2024/02/19/treeview/AI-answers/chatgpt":{
  "parent":"/blogs/kristy/2024/02/19/treeview/AI-answers",
  "title":`Response from ChatGPT 3.5`,
  "navLabel":"Response from ChatGPT 3.5",
  "children":[
  ],
},
"/blogs/kristy/2024/02/19/treeview/AI-answers/claude":{
  "parent":"/blogs/kristy/2024/02/19/treeview/AI-answers",
  "title":`Response from Claude`,
  "navLabel":"Response from Claude",
  "children":[
  ],
},
"/blogs/kristy/2024/02/19/treeview/AI-answers/gemini":{
  "parent":"/blogs/kristy/2024/02/19/treeview/AI-answers",
  "title":`Response from Gemini`,
  "navLabel":"Response from Gemini",
  "children":[
  ],
},
"/blogs/kristy/2024/03":{
  "parent":"/blogs/kristy/2024",
  "title":`March`,
  "navLabel":"March",
  "children":[
    "/blogs/kristy/2024/03/02",
    "/blogs/kristy/2024/03/03",
  ],
},
"/blogs/kristy/2024/03/02":{
  "parent":"/blogs/kristy/2024/03",
  "navLabel":"02",
  "children":[
    "/blogs/kristy/2024/03/02/embedding-short-form-videos",
    "/blogs/kristy/2024/03/02/working-on-this-site",
  ],
},
"/blogs/kristy/2024/03/02/embedding-short-form-videos":{
  "parent":"/blogs/kristy/2024/03/02",
  "title":`Embedding short form videos`,
  "navLabel":"Embedding short form videos",
  "children":[
    "/blogs/kristy/2024/03/02/embedding-short-form-videos/embedding-facebook-reels",
    "/blogs/kristy/2024/03/02/embedding-short-form-videos/embedding-tiktok",
    "/blogs/kristy/2024/03/02/embedding-short-form-videos/embedding-youtube-shorts",
  ],
},
"/blogs/kristy/2024/03/02/embedding-short-form-videos/embedding-facebook-reels":{
  "parent":"/blogs/kristy/2024/03/02/embedding-short-form-videos",
  "title":`Embedding a Facebook Reel`,
  "navLabel":"Embedding a Facebook Reel",
  "children":[
  ],
},
"/blogs/kristy/2024/03/02/embedding-short-form-videos/embedding-tiktok":{
  "parent":"/blogs/kristy/2024/03/02/embedding-short-form-videos",
  "title":`Embedding TikTok`,
  "navLabel":"Embedding TikTok",
  "children":[
  ],
},
"/blogs/kristy/2024/03/02/embedding-short-form-videos/embedding-youtube-shorts":{
  "parent":"/blogs/kristy/2024/03/02/embedding-short-form-videos",
  "title":`Embedding a Youtube short`,
  "navLabel":"Embedding a Youtube short",
  "children":[
  ],
},
"/blogs/kristy/2024/03/02/working-on-this-site":{
  "parent":"/blogs/kristy/2024/03/02",
  "title":`Working on this site`,
  "navLabel":"Working on this site",
  "children":[
  ],
},
"/blogs/kristy/2024/03/03":{
  "parent":"/blogs/kristy/2024/03",
  "navLabel":"03",
  "children":[
    "/blogs/kristy/2024/03/03/code-block",
    "/blogs/kristy/2024/03/03/google-tag-manager-vs-analytics",
    "/blogs/kristy/2024/03/03/inserting-element-after",
    "/blogs/kristy/2024/03/03/tater-tot-the-orange-girl-cat",
  ],
},
"/blogs/kristy/2024/03/03/code-block":{
  "parent":"/blogs/kristy/2024/03/03",
  "navLabel":"code-block",
  "children":[
  ],
},
"/blogs/kristy/2024/03/03/google-tag-manager-vs-analytics":{
  "parent":"/blogs/kristy/2024/03/03",
  "title":`When does a website need Google Tag Manager instead of Google Analytics?`,
  "navLabel":"When does a website need Google Tag Manager instead of Google Analytics?",
  "children":[
  ],
},
"/blogs/kristy/2024/03/03/inserting-element-after":{
  "parent":"/blogs/kristy/2024/03/03",
  "navLabel":"inserting-element-after",
  "children":[
  ],
},
"/blogs/kristy/2024/03/03/tater-tot-the-orange-girl-cat":{
  "parent":"/blogs/kristy/2024/03/03",
  "navLabel":"tater-tot-the-orange-girl-cat",
  "children":[
  ],
},
"/coding":{
  "parent":"/",
  "navLabel":"coding",
  "children":[
    "/coding/this-site",
    "/coding/web-design",
  ],
},
"/coding/this-site":{
  "parent":"/coding",
  "navLabel":"this-site",
  "children":[
    "/coding/this-site/bootstrap",
    "/coding/this-site/css",
    "/coding/this-site/github",
    "/coding/this-site/html",
    "/coding/this-site/javascript",
    "/coding/this-site/libraries",
    "/coding/this-site/markdown",
  ],
},
"/coding/this-site/bootstrap":{
  "parent":"/coding/this-site",
  "navLabel":"bootstrap",
  "children":[
    "/coding/this-site/bootstrap/cheatsheet-v5.3",
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3":{
  "parent":"/coding/this-site/bootstrap",
  "title":`Bootstrap cheatsheet v5.3`,
  "navLabel":"Bootstrap cheatsheet v5.3",
  "children":[
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/content",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/forms",
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3",
  "navLabel":"components",
  "children":[
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/accordian",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/alerts",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/badge",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/breadcrumb",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/button-group",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/buttons",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/card",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/carousel",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/dropdowns",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/list-group",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/modal",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/navbar",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/navs",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/pagination",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/popovers",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/progress",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/scrollspy",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/spinners",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/toasts",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/components/tooltips",
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/accordian":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"accordian",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/alerts":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"alerts",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/badge":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"badge",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/breadcrumb":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"breadcrumb",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/button-group":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"button-group",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/buttons":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"buttons",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/card":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"card",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/carousel":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"carousel",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/dropdowns":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"dropdowns",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/list-group":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"list-group",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/modal":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"modal",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/navbar":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"navbar",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/navs":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"navs",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/pagination":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"pagination",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/popovers":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"popovers",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/progress":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"progress",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/scrollspy":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"scrollspy",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/spinners":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"spinners",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/toasts":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"toasts",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/components/tooltips":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/components",
  "navLabel":"tooltips",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/content":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3",
  "navLabel":"content",
  "children":[
    "/coding/this-site/bootstrap/cheatsheet-v5.3/content/figures",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/content/images",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/content/tables",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/content/typography",
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/content/figures":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/content",
  "navLabel":"figures",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/content/images":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/content",
  "navLabel":"images",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/content/tables":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/content",
  "navLabel":"tables",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/content/typography":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/content",
  "navLabel":"typography",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/forms":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3",
  "navLabel":"forms",
  "children":[
    "/coding/this-site/bootstrap/cheatsheet-v5.3/forms/disabled-forms",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/forms/floating-labels",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/forms/input-group",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/forms/overview",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/forms/sizing",
    "/coding/this-site/bootstrap/cheatsheet-v5.3/forms/validation",
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/forms/disabled-forms":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/forms",
  "navLabel":"disabled-forms",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/forms/floating-labels":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/forms",
  "navLabel":"floating-labels",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/forms/input-group":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/forms",
  "navLabel":"input-group",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/forms/overview":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/forms",
  "navLabel":"overview",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/forms/sizing":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/forms",
  "navLabel":"sizing",
  "children":[
  ],
},
"/coding/this-site/bootstrap/cheatsheet-v5.3/forms/validation":{
  "parent":"/coding/this-site/bootstrap/cheatsheet-v5.3/forms",
  "navLabel":"validation",
  "children":[
  ],
},
"/coding/this-site/css":{
  "parent":"/coding/this-site",
  "navLabel":"css",
  "children":[
    "/coding/this-site/css/ancestor-demo",
  ],
},
"/coding/this-site/css/ancestor-demo":{
  "parent":"/coding/this-site/css",
  "navLabel":"ancestor-demo",
  "children":[
    "/coding/this-site/css/ancestor-demo/demo-child",
  ],
},
"/coding/this-site/css/ancestor-demo/demo-child":{
  "parent":"/coding/this-site/css/ancestor-demo",
  "navLabel":"demo-child",
  "children":[
    "/coding/this-site/css/ancestor-demo/demo-child/demo-grand-child",
  ],
},
"/coding/this-site/css/ancestor-demo/demo-child/demo-grand-child":{
  "parent":"/coding/this-site/css/ancestor-demo/demo-child",
  "navLabel":"demo-grand-child",
  "children":[
    "/coding/this-site/css/ancestor-demo/demo-child/demo-grand-child/demo-great-grand-child",
  ],
},
"/coding/this-site/css/ancestor-demo/demo-child/demo-grand-child/demo-great-grand-child":{
  "parent":"/coding/this-site/css/ancestor-demo/demo-child/demo-grand-child",
  "navLabel":"demo-great-grand-child",
  "children":[
  ],
},
"/coding/this-site/github":{
  "parent":"/coding/this-site",
  "navLabel":"github",
  "children":[
  ],
},
"/coding/this-site/html":{
  "parent":"/coding/this-site",
  "navLabel":"html",
  "children":[
  ],
},
"/coding/this-site/javascript":{
  "parent":"/coding/this-site",
  "navLabel":"javascript",
  "children":[
    "/coding/this-site/javascript/ancestor-demo",
  ],
},
"/coding/this-site/javascript/ancestor-demo":{
  "parent":"/coding/this-site/javascript",
  "navLabel":"ancestor-demo",
  "children":[
    "/coding/this-site/javascript/ancestor-demo/demo-child",
  ],
},
"/coding/this-site/javascript/ancestor-demo/demo-child":{
  "parent":"/coding/this-site/javascript/ancestor-demo",
  "navLabel":"demo-child",
  "children":[
    "/coding/this-site/javascript/ancestor-demo/demo-child/demo-grand-child",
  ],
},
"/coding/this-site/javascript/ancestor-demo/demo-child/demo-grand-child":{
  "parent":"/coding/this-site/javascript/ancestor-demo/demo-child",
  "navLabel":"demo-grand-child",
  "children":[
    "/coding/this-site/javascript/ancestor-demo/demo-child/demo-grand-child/demo-great-grand-child",
  ],
},
"/coding/this-site/javascript/ancestor-demo/demo-child/demo-grand-child/demo-great-grand-child":{
  "parent":"/coding/this-site/javascript/ancestor-demo/demo-child/demo-grand-child",
  "navLabel":"demo-great-grand-child",
  "children":[
  ],
},
"/coding/this-site/libraries":{
  "parent":"/coding/this-site",
  "navLabel":"libraries",
  "children":[
  ],
},
"/coding/this-site/markdown":{
  "parent":"/coding/this-site",
  "navLabel":"markdown",
  "children":[
  ],
},
"/coding/web-design":{
  "parent":"/coding",
  "title":`Web Design`,
  "navLabel":"Web Design",
  "children":[
    "/coding/web-design/sitemaps",
  ],
},
"/coding/web-design/sitemaps":{
  "parent":"/coding/web-design",
  "title":`Sitemaps`,
  "navLabel":"Sitemaps",
  "children":[
  ],
},
"/digital-curation":{
  "parent":"/",
  "navLabel":"digital-curation",
  "children":[
    "/digital-curation/images",
  ],
},
"/digital-curation/images":{
  "parent":"/digital-curation",
  "navLabel":"images",
  "children":[
    "/digital-curation/images/openclipart.org",
  ],
},
"/digital-curation/images/openclipart.org":{
  "parent":"/digital-curation/images",
  "navLabel":"openclipart.org",
  "children":[
    "/digital-curation/images/openclipart.org/monthly-calendars",
  ],
},
"/digital-curation/images/openclipart.org/monthly-calendars":{
  "parent":"/digital-curation/images/openclipart.org",
  "navLabel":"monthly-calendars",
  "children":[
  ],
},
"/img":{
  "parent":"/",
  "navLabel":"img",
  "children":[
  ],
},
"/recipes":{
  "parent":"/",
  "title":`Recipes`,
  "navLabel":"Recipes",
  "children":[
    "/recipes/desserts",
    "/recipes/main-courses",
    "/recipes/sides",
    "/recipes/what-did-ai-say",
  ],
},
"/recipes/desserts":{
  "parent":"/recipes",
  "title":`Desserts`,
  "navLabel":"Desserts",
  "children":[
    "/recipes/desserts/almond-cake",
    "/recipes/desserts/chocolate-cream-pie",
    "/recipes/desserts/cocoa-mint-sandwich-cookies",
    "/recipes/desserts/date-balls",
    "/recipes/desserts/ginger-snaps",
    "/recipes/desserts/peanut-butter-cookies",
    "/recipes/desserts/rainbow-cookies",
    "/recipes/desserts/tiramisu",
  ],
},
"/recipes/desserts/almond-cake":{
  "parent":"/recipes/desserts",
  "title":`Almond cake`,
  "navLabel":"Almond cake",
  "children":[
  ],
},
"/recipes/desserts/chocolate-cream-pie":{
  "parent":"/recipes/desserts",
  "title":`Chocolate cream pie`,
  "navLabel":"Chocolate cream pie",
  "children":[
  ],
},
"/recipes/desserts/cocoa-mint-sandwich-cookies":{
  "parent":"/recipes/desserts",
  "title":`Cocoa Mint Sandwich Cookies`,
  "navLabel":"Cocoa Mint Sandwich Cookies",
  "children":[
  ],
},
"/recipes/desserts/date-balls":{
  "parent":"/recipes/desserts",
  "title":`Date Balls`,
  "navLabel":"Date Balls",
  "children":[
  ],
},
"/recipes/desserts/ginger-snaps":{
  "parent":"/recipes/desserts",
  "title":`Ginger snaps`,
  "navLabel":"Ginger snaps",
  "children":[
  ],
},
"/recipes/desserts/peanut-butter-cookies":{
  "parent":"/recipes/desserts",
  "title":`Peanut Butter Cookies`,
  "navLabel":"Peanut Butter Cookies",
  "children":[
  ],
},
"/recipes/desserts/rainbow-cookies":{
  "parent":"/recipes/desserts",
  "title":`Rainbow Cookies`,
  "navLabel":"Rainbow Cookies",
  "children":[
  ],
},
"/recipes/desserts/tiramisu":{
  "parent":"/recipes/desserts",
  "title":`Tiramisu`,
  "navLabel":"Tiramisu",
  "children":[
  ],
},
"/recipes/main-courses":{
  "parent":"/recipes",
  "title":`Main courses`,
  "navLabel":"Main courses",
  "children":[
    "/recipes/main-courses/chicken-meatballs",
    "/recipes/main-courses/shepherds-pie",
  ],
},
"/recipes/main-courses/chicken-meatballs":{
  "parent":"/recipes/main-courses",
  "title":`Chicken meatballs`,
  "navLabel":"Chicken meatballs",
  "children":[
  ],
},
"/recipes/main-courses/shepherds-pie":{
  "parent":"/recipes/main-courses",
  "title":`Shepherd's Pie`,
  "navLabel":"Shepherd's Pie",
  "children":[
  ],
},
"/recipes/sides":{
  "parent":"/recipes",
  "title":`Sides`,
  "navLabel":"Sides",
  "children":[
    "/recipes/sides/macaroni-and-cheese-1-pot-version",
    "/recipes/sides/mashed-potatoes",
    "/recipes/sides/yeast-rolls",
  ],
},
"/recipes/sides/macaroni-and-cheese-1-pot-version":{
  "parent":"/recipes/sides",
  "title":`One-Pot Macaroni and Cheese Recipe`,
  "navLabel":"One-Pot Macaroni and Cheese Recipe",
  "children":[
  ],
},
"/recipes/sides/mashed-potatoes":{
  "parent":"/recipes/sides",
  "title":`Mashed potatoes`,
  "navLabel":"Mashed potatoes",
  "children":[
  ],
},
"/recipes/sides/yeast-rolls":{
  "parent":"/recipes/sides",
  "title":`Yeast Rolls`,
  "navLabel":"Yeast Rolls",
  "children":[
  ],
},
"/recipes/what-did-ai-say":{
  "parent":"/recipes",
  "title":`What did AI say?`,
  "navLabel":"What did AI say?",
  "children":[
    "/recipes/what-did-ai-say/beef-stew",
    "/recipes/what-did-ai-say/crab-cakes",
    "/recipes/what-did-ai-say/pie-crust",
  ],
},
"/recipes/what-did-ai-say/beef-stew":{
  "parent":"/recipes/what-did-ai-say",
  "navLabel":"beef-stew",
  "children":[
    "/recipes/what-did-ai-say/beef-stew/beef-stew-20240120-bard",
    "/recipes/what-did-ai-say/beef-stew/beef-stew-20240120-bing",
    "/recipes/what-did-ai-say/beef-stew/beef-stew-20240120-chatgpt",
  ],
},
"/recipes/what-did-ai-say/beef-stew/beef-stew-20240120-bard":{
  "parent":"/recipes/what-did-ai-say/beef-stew",
  "navLabel":"beef-stew-20240120-bard",
  "children":[
  ],
},
"/recipes/what-did-ai-say/beef-stew/beef-stew-20240120-bing":{
  "parent":"/recipes/what-did-ai-say/beef-stew",
  "navLabel":"beef-stew-20240120-bing",
  "children":[
  ],
},
"/recipes/what-did-ai-say/beef-stew/beef-stew-20240120-chatgpt":{
  "parent":"/recipes/what-did-ai-say/beef-stew",
  "navLabel":"beef-stew-20240120-chatgpt",
  "children":[
  ],
},
"/recipes/what-did-ai-say/crab-cakes":{
  "parent":"/recipes/what-did-ai-say",
  "navLabel":"crab-cakes",
  "children":[
    "/recipes/what-did-ai-say/crab-cakes/crab-cakes-20240120-bard",
    "/recipes/what-did-ai-say/crab-cakes/crab-cakes-20240120-bing",
    "/recipes/what-did-ai-say/crab-cakes/crab-cakes-20240120-chatgpt",
  ],
},
"/recipes/what-did-ai-say/crab-cakes/crab-cakes-20240120-bard":{
  "parent":"/recipes/what-did-ai-say/crab-cakes",
  "navLabel":"crab-cakes-20240120-bard",
  "children":[
  ],
},
"/recipes/what-did-ai-say/crab-cakes/crab-cakes-20240120-bing":{
  "parent":"/recipes/what-did-ai-say/crab-cakes",
  "navLabel":"crab-cakes-20240120-bing",
  "children":[
  ],
},
"/recipes/what-did-ai-say/crab-cakes/crab-cakes-20240120-chatgpt":{
  "parent":"/recipes/what-did-ai-say/crab-cakes",
  "navLabel":"crab-cakes-20240120-chatgpt",
  "children":[
  ],
},
"/recipes/what-did-ai-say/pie-crust":{
  "parent":"/recipes/what-did-ai-say",
  "navLabel":"pie-crust",
  "children":[
    "/recipes/what-did-ai-say/pie-crust/20240208",
  ],
},
"/recipes/what-did-ai-say/pie-crust/20240208":{
  "parent":"/recipes/what-did-ai-say/pie-crust",
  "navLabel":"20240208",
  "children":[
    "/recipes/what-did-ai-say/pie-crust/20240208/bing",
    "/recipes/what-did-ai-say/pie-crust/20240208/chatgpt",
    "/recipes/what-did-ai-say/pie-crust/20240208/gemini",
  ],
},
"/recipes/what-did-ai-say/pie-crust/20240208/bing":{
  "parent":"/recipes/what-did-ai-say/pie-crust/20240208",
  "title":`Response from Bing Copilot`,
  "navLabel":"Response from Bing Copilot",
  "children":[
  ],
},
"/recipes/what-did-ai-say/pie-crust/20240208/chatgpt":{
  "parent":"/recipes/what-did-ai-say/pie-crust/20240208",
  "title":`Response from ChatGPT 3.5`,
  "navLabel":"Response from ChatGPT 3.5",
  "children":[
  ],
},
"/recipes/what-did-ai-say/pie-crust/20240208/gemini":{
  "parent":"/recipes/what-did-ai-say/pie-crust/20240208",
  "title":`Response from Gemini`,
  "navLabel":"Response from Gemini",
  "children":[
  ],
},
"/sitemap":{
  "parent":"/",
  "title":`Sitemap`,
  "navLabel":"Sitemap",
  "children":[
  ],
},
"/upcycling":{
  "parent":"/",
  "title":`Creative Reuse`,
  "navLabel":"Creative Reuse",
  "children":[
    "/upcycling/food-scraps",
    "/upcycling/textiles",
  ],
},
"/upcycling/food-scraps":{
  "parent":"/upcycling",
  "title":`Creative Reuse of Food Scraps`,
  "navLabel":"Creative Reuse of Food Scraps",
  "children":[
    "/upcycling/food-scraps/coffee-grounds",
    "/upcycling/food-scraps/tea-bags",
  ],
},
"/upcycling/food-scraps/coffee-grounds":{
  "parent":"/upcycling/food-scraps",
  "title":`Reusing Coffee Grounds`,
  "navLabel":"Reusing Coffee Grounds",
  "children":[
  ],
},
"/upcycling/food-scraps/tea-bags":{
  "parent":"/upcycling/food-scraps",
  "title":`Reusing Tea Bags`,
  "navLabel":"Reusing Tea Bags",
  "children":[
  ],
},
"/upcycling/textiles":{
  "parent":"/upcycling",
  "title":`Creative Reuse of Textiles`,
  "navLabel":"Creative Reuse of Textiles",
  "children":[
    "/upcycling/textiles/t-shirts",
  ],
},
"/upcycling/textiles/t-shirts":{
  "parent":"/upcycling/textiles",
  "title":`Upcycling T-shirts`,
  "navLabel":"Upcycling T-shirts",
  "children":[
  ],
},
}
