(()=>{"use strict";function e(e){let t={printUnits:"mm",printLeftMargin:"21",printRightMargin:"21",printTopMargin:"12",printBottomMargin:"12",printFontSize:"12pt",screenUnits:"px",headerMargin:"16",footerMargin:"16",virtualPagesGap:"16"};const n={printWidth:"210",printHeight:"297"},r={printWidth:"148.5",printHeight:"210"};switch(e.printPaperSize){case"A5":case"a5":t={...t,...r};break;default:t={...t,...n}}return t}const t={root:"#printTHIS",footerTemplate:"#printTHISfooter",headerTemplate:"#printTHISheader",frontpageTemplate:"#printTHISfrontpage",frontpageContent:".frontpageContent",headerContent:".headerContent",footerContent:".footerContent",paperBody:".paperBody",paperHeader:".paperHeader",paperFooter:".paperFooter",virtualPaper:".virtualPaper",virtualPaperTopMargin:".virtualPaperTopMargin",virtualPaperBottomMargin:".virtualPaperBottomMargin",virtualPaperGap:".virtualPaperGap",paperFlow:"#paperFlow",contentFlow:"#contentFlow",runningSafety:".runningSafety",pageNumberRoot:"[data-page-number-root]",pageNumberCurrent:"[data-page-number-current]",pageNumberTotal:"[data-page-number-total]",printIgnore:"[data-print-ignore]",printHide:"[data-print-hide]",printPageBreak:"[data-print-page-break]",printForcedPageBreak:"[data-print-forced-page-break]",printNoBreak:"[data-print-no-break]",neutral:"[data-neutral]",complexTextBlock:"html2pdf-complex-text-block"};class n{constructor(e){this.config=e}create(){return`\n\n  @page {\n    size: A4;\n    /* 2 values: width then height */\n    size: ${this.config.printWidth+this.config.printUnits} ${this.config.printHeight+this.config.printUnits};\n\n    margin-left: ${this.config.printLeftMargin-1+this.config.printUnits};\n    margin-right: ${this.config.printRightMargin-1+this.config.printUnits};\n    margin-top: ${this.config.printTopMargin-0+this.config.printUnits};\n    margin-bottom: ${this.config.printBottomMargin-2+this.config.printUnits};\n  }\n\n  ${t.root} {\n    /* reset user styles */\n    display: block;\n\n    /* for proper printable flow positioning */\n    position: relative;\n\n    /* to compensate for possible BG in the parent node */\n    z-index: 1;\n\n    /* set print styles: affects previews */\n    margin: 0 auto;\n    width: ${this.config.printWidth-this.config.printLeftMargin-this.config.printRightMargin}${this.config.printUnits};\n    font-size: ${this.config.printFontSize};\n\n    /* protection against unpredictability of margins */\n    padding-top: .1px;\n    padding-bottom: ${2*this.config.virtualPagesGap+this.config.screenUnits};\n  }\n\n  ${t.virtualPaper} {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: minmax(min-content, max-content) minmax(min-content, max-content) 1fr minmax(min-content, max-content) minmax(min-content, max-content);\n    place-items: stretch stretch;\n    place-content: stretch stretch;\n    width: ${this.config.printWidth-this.config.printLeftMargin-this.config.printRightMargin}${this.config.printUnits};\n    height: ${this.config.printHeight}${this.config.printUnits};\n    font-size: ${this.config.printFontSize};\n  }\n\n  ${t.virtualPaper}::before {\n    position: absolute;\n    content: '';\n    width: ${this.config.printWidth}${this.config.printUnits};\n    height: ${this.config.printHeight}${this.config.printUnits};\n    left: -${this.config.printLeftMargin}${this.config.printUnits};\n    background-color: #fff;\n    box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 12px 0px;\n    z-index: -1;\n  }\n\n  ${t.headerContent} {\n    display: block;\n    padding-bottom: ${this.config.headerMargin}${this.config.screenUnits};\n  }\n\n  ${t.footerContent} {\n    display: block;\n    padding-top: ${this.config.footerMargin}${this.config.screenUnits};\n  }\n\n  ${t.paperFlow} {\n    position: absolute;\n    width: 100%;\n    z-index: -1;\n    /* affect only screen */\n    padding-bottom: 100px;\n  }\n\n  ${t.runningSafety} {\n    display: block;\n    padding: .1px;\n  }\n\n  ${t.virtualPaperTopMargin} {\n    display: block;\n    height: ${this.config.printTopMargin}${this.config.printUnits};\n  }\n\n  ${t.virtualPaperBottomMargin} {\n    display: block;\n    height: ${this.config.printBottomMargin}${this.config.printUnits};\n  }\n\n  ${t.virtualPaperGap} {\n    display: block;\n    padding-top: ${this.config.virtualPagesGap}${this.config.screenUnits};\n  }\n\n  ${t.frontpageContent} {\n    display: block;\n    transform-origin: top center;\n    padding: .1px;\n    height: 100%;\n  }\n\n  ${t.neutral},\n  ${t.neutral} span {\n    display: inline;\n    padding: 0;\n    margin: 0;\n    font: inherit;\n    color: inherit;\n    line-height: inherit;\n    background: none;\n    background-color: transparent;\n  }\n\n  @media print {\n    ${t.root} {\n      /* to prevent a blank last page */\n      padding: 0;\n    }\n\n    ${t.paperFlow} {\n      padding-bottom: 0;\n    }\n\n    ${t.printIgnore},\n    ${t.virtualPaper} {\n      display: contents;\n    }\n\n    ${t.virtualPaper}::before,\n    ${t.printHide},\n    ${t.virtualPaperTopMargin},\n    ${t.virtualPaperBottomMargin},\n    ${t.virtualPaperGap} {\n      display: none;\n    }\n\n    ${t.printPageBreak} {\n      break-after: page;\n      padding: .1px;\n    }\n\n    ${t.printForcedPageBreak} {\n      /* JUST MANUAL! */\n      /* break-after: page; */\n    }\n\n    ${t.printNoBreak} {\n      /*\n      TODO: temporary commented!\n      When splitting blocks, printPageBreak falls INTO this element,\n      and in Firefox it causes a blank page.\n      FIX the split of complex blocks and check in Firefox.\n      */\n      /* break-inside: avoid-page; */\n    }\n  }\n\n  /* FOR TEST */\n  ${t.virtualPaperGap} {\n    background: #ff000020;\n  }\n\n  ${t.paperFooter},\n  ${t.paperHeader} {\n    background: #fa96ff20;\n  }\n  ${t.paperBody} {\n    background: #ffee0020;\n  }\n  ${t.runningSafety} {\n    background: #f200ff;\n  }\n  ${t.frontpageContent} {\n    background: #00fcff20;\n  }\n\n  ${t.neutral} {\n    background: #00ffee10;\n  }\n\n  [filler] {\n    background:repeating-linear-gradient(\n      -45deg,\n      rgba(0, 175, 255, .1),\n      rgba(0, 175, 255, .1) 10px,\n      rgba(0, 175, 255, .15) 10px,\n      rgba(0, 175, 255, .15) 20px\n    );\n  }\n\n`}}class r{constructor({DOM:e,debugMode:t}){this.debugMode=t,this.DOM=e,this.body=e.body}insertStyle(e){const t=this.DOM.querySelector("head"),n=this.DOM.createElement("style");n.append(this.DOM.createTextNode(e)),n.setAttribute("data-printthis-inserted",""),t.append(n)}createDocumentFragment(){return this.DOM.createDocumentFragment()}getElement(e,t=this.DOM){return t.querySelector(e)}removeNode(e){e.remove()}cloneNode(e){return e?.cloneNode(!0)}cloneNodeWrapper(e){return e?.cloneNode(!1)}insertBefore(e,...t){e.before(...t)}insertAfter(e,...t){e.after(...t)}insertAtEnd(e,...t){e.append(...t)}insertAtStart(e,...t){e.prepend(...t)}insertInsteadOf(e,...t){e.before(...t),e.remove()}getRightNeighbor(e){return e.nextElementSibling}getLeftNeighbor(e){return e.previousElementSibling}getElementOffsetParent(e){return e.offsetParent}getDataId(e){return e.dataset.id}setAttribute(e,t){if(!e||!t)return void console.warn("setAttribute() must have 2 params");const n=t.charAt(0);if("."===n){const n=t.substring(1);e.classList.add(n)}if("#"===n){const n=t.substring(1);e.id=n}if("["===n){const n=t.substring(1,t.length-1);e.setAttribute(n,"")}}setPrintNoBreak(e){this.setAttribute(e,t.printNoBreak)}wrapTextNode(e){if(!this.isSignificantTextNode(e))return;const t=this.createNeutral();return e.before(t),t.append(e),t}createNeutral(){const e=this.DOM.createElement("span");return this.setAttribute(e,t.neutral),e}createTestNodeFrom(e){const t=e.cloneNode(!1);return t.classList="test-node",t.style.position="absolute",t.style.background="rgb(255 239 177)",t.style.width=this.getMaxWidth(e)+"px",t}getMaxWidth(e){const t=this.create();e.append(t);const n=this.getElementWidth(t);return t.remove(),n}getLineHeight(e){const t=this.createNeutral();t.innerHTML="!",e.append(t);const n=t.offsetHeight;return t.remove(),n}getEmptyNodeHeight(e){const t=e.cloneNode(!1);e.before(t);const n=t.offsetHeight;return t.remove(),n}createComplexTextBlock(){const e=this.create();return e.className="complex-text-block",e.setAttribute(t.complexTextBlock,""),e}isComplexTextBlock(e){return e.hasAttribute(t.complexTextBlock)}getComputedStyle(e){return window.getComputedStyle(e)}isInline(e){return"inline"===this.getComputedStyle(e).display||"inline-block"===this.getComputedStyle(e).display||"inline-table"===this.getComputedStyle(e).display}isNeutral(e){return e.dataset?.hasOwnProperty("neutral")}isForcedPageBreak(e){return e.dataset?.hasOwnProperty("printForcedPageBreak")}findAllForcedPageBreakInside(e){return[...e.querySelectorAll("[data-print-forced-page-break]")]}isNoBreak(e){return e.dataset?.hasOwnProperty("printNoBreak")}getElementTagName(e){return e.tagName}isDocumentBody(e){return"BODY"===e.tagName}isTextNode(e){return e.nodeType===Node.TEXT_NODE}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isSignificantTextNode(e){return!!this.isTextNode(e)&&e.nodeValue.trim().length>0}clearTemplates(e){e.querySelectorAll("template").forEach((e=>e.remove()))}getParentNode(e){return e.parentNode}getChildNodes(e){return e.childNodes}getChildren(e){return e.children}getInnerHTML(e){if("string"==typeof e){const t=this.DOM.querySelector(e);return t?t.innerHTML:void 0}return e.innerHTML}setInnerHTML(e,t){if("string"==typeof e){const n=this.DOM.querySelector(e);n&&(n.innerHTML=t)}e.innerHTML=t}setStyles(e,t){Object.entries(t).forEach((([t,n])=>e.style[t]=n))}create(e){if(!e)return this.DOM.createElement("div");const t=e.charAt(0);if("."===t){const t=e.substring(1),n=this.DOM.createElement("div");return n.classList.add(t),n}if("#"===t){const t=e.substring(1),n=this.DOM.createElement("div");return n.id=t,n}if("["===t){const t=e.substring(1,e.length-1),n=this.DOM.createElement("div");return n.setAttribute(t,""),n}return this.DOM.createElement(e)}createPrintPageBreak(){return this.create(t.printPageBreak)}createPrintNoBreak(e){const n=this.create(t.printNoBreak);return e&&(n.style=e),n}wrapNode(e,t){e.before(t),t.append(e)}wrapWithPrintNoBreak(e){const t=this.createPrintNoBreak();return e.before(t),t.append(e),t}fitElementWithinBoundaries({element:e,height:t,width:n,vspace:r,hspace:i}){const o=r/t,s=i/n,a=o<s?o:s,h=Math.trunc(t*a),l=Math.trunc(n*a);e.style.height=h+"px",e.style.width=l+"px",e.setAttribute("height",`${h}px`),e.setAttribute("width",`${l}px`)}getElementBCR(e){return e.getBoundingClientRect()}getElementTop(e){return e?.offsetTop}getElementLeft(e){return e?.offsetLeft}getElementHeight(e){return e?.offsetHeight}getElementWidth(e){return e?.offsetWidth}getElementRelativeTop(e){return e?.offsetTop}getElementRootedTop(e,t,n=0){if(!e)return void console.warn("element must be provided",e);if(!t)return void console.warn("root must be provided",e);const r=e.offsetParent;if(!r)return void console.warn("element has no offset parent",e);const i=e.offsetTop;return r===t?i+n:this.getElementRootedTop(r,t,n+i)}getElementRelativeBottom(e){return e?.offsetTop+e?.offsetHeight||void 0}getElementRootedBottom(e,t){return this.getElementRootedTop(e,t)+this.getElementHeight(e)}getElementRootedRealBottom(e,t){const n=this.create();e&&e.after(n);const r=e?this.getElementRootedTop(n,t):void 0;return n.remove(),r}isLineChanged(e,t){return this.getElementRelativeBottom(e)<=this.getElementRelativeTop(t)}isLineKept(e,t){return this.getElementRelativeBottom(e)>this.getElementRelativeTop(t)}splitByWordsGreedy(e){return e.innerHTML.split(/\s+/)}prepareSplittedNode(e){const t=e,n=this.splitByWordsGreedy(e),r=n.map((e=>{const t=this.DOM.createElement("span");return t.innerHTML=e+" ",t})),i=this.createTestNodeFrom(e);return i.append(...r),e.append(i),{splittedNode:t,nodeWords:n,nodeWordItems:r}}createSignpost(e,t=24){const n=this.create();return n.style.display="flex",n.style.flexWrap="nowrap",n.style.alignItems="center",n.style.justifyContent="center",n.style.textAlign="center",n.style.fontSize="8px",n.style.fontFamily="sans-serif",n.style.letterSpacing="1px",n.style.textTransform="uppercase",n.style.height=t+"px",e&&(n.innerHTML=e),n}createTable({wrapper:e,caption:t,thead:n,tfoot:r,tbody:i}){const o=e||this.create("table"),s=this.create("TBODY");return t&&o.append(t),n&&o.append(n),i&&s.append(...i),o.append(s),r&&o.append(r),o}}const i="border:1px solid #8888CC;background:#EEEEEE;color:#8888CC;";class o{constructor({debugMode:e,DOM:t,selector:n}){this.debugMode=e,this.DOM=t,this.selector=n,this.rootSelector=n?.root,this.paperFlowSelector=n?.paperFlow,this.contentFlowSelector=n?.contentFlow,this.printIgnoreElementSelector=n?.printIgnore,this.printHideElementSelector=n?.printHide,this.root=this._initRoot(),this.paperFlow=this._createPaperFlow(),this.contentFlow=this._createContentFlow()}create(){this.debugMode&&console.groupCollapsed("%c Layout ",i),this.DOM.setInnerHTML(this.root,""),this.DOM.insertAtEnd(this.root,this.paperFlow,this.contentFlow),this.root!==this.DOM.body&&this._ignorePrintingEnvironment(this.root),this.debugMode&&console.groupEnd("%c Layout ",i)}_initRoot(){let e=this.DOM.getElement(this.rootSelector);return this.debugMode&&console.log("%c Layout: init root ",i,e),e||(e=this.DOM.body,this.DOM.setAttribute(e,this.rootSelector),console.warn(`Add ${this.rootSelector} to the root element of the area you want to print. ${this.rootSelector} is now automatically added to the BODY tag.`)),e}_createPaperFlow(){return this.DOM.create(this.paperFlowSelector)}_createContentFlow(){const e=this.DOM.create(this.contentFlowSelector),t=this.DOM.getInnerHTML(this.root);return t.trim().length>0?(this.DOM.setInnerHTML(e,t),this.DOM.clearTemplates(e),this.DOM.insertAtEnd(e,this.DOM.create("[data-content-flow-end]"))):console.warn("It looks like you don't have any printable content."),e}_ignorePrintingEnvironment(e){let t=this.DOM.getParentNode(e);this.DOM.setAttribute(t,this.printIgnoreElementSelector),this.DOM.getChildNodes(t).forEach((t=>{if(t!==e&&this.DOM.isElementNode(t))this.DOM.setAttribute(t,this.printHideElementSelector);else{if(!this.DOM.isSignificantTextNode(t))return;this.DOM.setAttribute(this.DOM.wrapTextNode(t),this.printHideElementSelector)}})),this.DOM.isDocumentBody(t)||this._ignorePrintingEnvironment(t)}}const s="#66CC00",a=`color: ${s};font-weight:bold`,h=`color: ${s};font-weight:bold;font-size:smaller;`,l=`border:1px solid ${s};background:#EEEEEE;color:${s};`;class c{constructor({debugMode:e,DOM:t,layout:n,referenceWidth:r,referenceHeight:i}){this.debugMode=e,this.DOM=t,this.root=n.root,this.contentFlow=n.contentFlow,this.referenceWidth=r,this.referenceHeight=i,this.minLeftLines=2,this.minDanglingLines=2,this.minBreakableLines=this.minLeftLines+this.minDanglingLines,this.minLeftRows=2,this.minDanglingRows=2,this.minBreakableRows=this.minLeftRows+this.minDanglingRows,this.minPreFirstBlockLines=3,this.minPreLastBlockLines=3,this.minPreBreakableLines=this.minPreFirstBlockLines+this.minPreLastBlockLines,this.imageReductionRatio=.8,this.signpostHeight=24,this.pages=[]}calculate(){return this._calculate(),this.debugMode&&console.log("%c ✔ Pages.calculate()",l,this.pages),this.pages}_calculate(){if(this.debugMode&&console.group("%c Pages ",l),this.DOM.getElementRootedRealBottom(this.contentFlow,this.root)<this.referenceHeight){const e=this.DOM.create("[data-content-flow-start]");return this.DOM.insertAtStart(this.contentFlow,e),this._registerPageStart(e),void this.DOM.findAllForcedPageBreakInside(this.contentFlow).forEach((e=>this._registerPageStart(e)))}const e=this._getChildren(this.contentFlow);this.debugMode&&console.log("%c🚸 children(contentFlow)",l,e),this._registerPageStart(e[0]),this._parseNodes({array:e}),this.debugMode&&console.groupEnd("%c Pages ")}_registerPageStart(e){this.pages.push({pageStart:e,pageBottom:this.DOM.getElementRootedTop(e,this.root)+this.referenceHeight})}_parseNodes({array:e,previous:t,next:n,parent:r,parentBottom:i}){for(let o=0;o<e.length;o++){const s=o===e.length-1;this.debugMode&&console.group("%c_parseNode",a,s?"★last★":""),this._parseNode({i:o,previousElement:e[o-1]||t,currentElement:e[o],nextElement:e[o+1]||n,parent:r,parentBottom:s?i:void 0}),this.debugMode&&console.groupEnd("%c_parseNode")}}_parseNode({i:e,previousElement:t,currentElement:n,nextElement:r,parent:i,parentBottom:o}){this.debugMode&&console.log("%c parent ","color:red;background:yellow",i),this.debugMode&&o&&console.log("%c parentBottom ","color:red",o),this.debugMode&&console.log("%c 3 nodes: ",l,{previousElement:t,currentElement:n,nextElement:r});const s=0==e&&i?i:n;if(this.debugMode&&o&&console.log("%c currentPageStart ","color:red;background:yellow",s),!r)return void(this.debugMode&&console.log("🏁 THE END"));if(this.DOM.isForcedPageBreak(n))return this._registerPageStart(r),void(this.debugMode&&console.log("🚩 FORCED BREAK"));console.assert(this.DOM.getElementOffsetParent(n),"it is expected that the element has an offset parent",n);const a=this.pages.at(-1).pageBottom;this.debugMode&&console.log("•••",a,"•••");const c=this.DOM.getElementRootedTop(r,this.root);if(this.debugMode&&console.log("next Top",c),c>a){if(this._canNotBeLast(n))return void this._registerPageStart(s);if(this._isSVG(n)||this._isIMG(n)){const e=this._isSVG(n)?this.DOM.wrapWithPrintNoBreak(n):n,t=a-this.DOM.getElementRootedTop(e,this.root),i=this.DOM.getElementHeight(e),o=this.DOM.getElementWidth(e);return i<this.referenceWidth&&console.warn("%c IMAGE is too wide","color: red"),i<t?void this._registerPageStart(r):t/i>this.imageReductionRatio?(this._registerPageStart(r),void this.DOM.fitElementWithinBoundaries({element:n,height:i,width:o,vspace:t,hspace:this.referenceWidth})):(this._registerPageStart(e),void(i>this.referenceHeight&&this.DOM.fitElementWithinBoundaries({element:n,height:i,width:o,vspace:this.referenceHeight,hspace:this.referenceWidth})))}const l=o||this.DOM.getElementRootedRealBottom(n,this.root);if(this.debugMode&&console.log("curr RR Bottom",l),l<=a)return void this._registerPageStart(r);let c=[];this.DOM.isNoBreak(n)||this._notSolved(n)?(this.debugMode&&console.info("%c isNoBreak ",h),c=[]):this.DOM.isComplexTextBlock(n)?(this.debugMode&&console.info("%c ComplexTextBlock ",h),c=this._splitComplexTextBlock(n)||[]):this._isTextNode(n)?(this.debugMode&&console.info("%c TextNode ",h),c=this._splitComplexTextBlock(n)||[]):this._isPRE(n)?(this.debugMode&&console.info("%c PRE ",h),c=this._splitPreNode(n,a)||[]):this._isTableNode(n)?(this.debugMode&&console.info("%c TABLE ",h),c=this._splitTableNode(n,a)||[]):(c=this._getChildren(n),this.debugMode&&console.info("%c 🚸 get element children ",h,c)),this._isVerticalFlowDisrupted(c)&&(c=this._processInlineChildren(c));const p=c.length;this.debugMode&&console.log("%c childrenNumber ","color:red",p),this.debugMode&&console.log("%c currentElement ","color:red",n);const g=p<=1||0==e?i||n:void 0;this.debugMode&&console.log("%c set retainedParent","background:yellow",g),p?this._parseNodes({array:c,previous:t,next:r,parent:g,parentBottom:l}):this._canNotBeLast(t)?this._registerPageStart(t):(this._registerPageStart(s),this.debugMode&&console.log("%c +++ register:","background:yellow",s))}}_processInlineChildren(e){let t=null;const n=[];return e.forEach((e=>{this.DOM.isInline(e)?(t||(t=this.DOM.createComplexTextBlock(),this.DOM.wrapNode(e,t),n.push(t)),this.DOM.insertAtEnd(t,e)):(t=null,n.push(e))})),n}_splitComplexTextBlock(e){const t=this._getChildren(e).map((e=>{const t=this.DOM.getLineHeight(e),n=this.DOM.getElementHeight(e);return{element:e,left:this.DOM.getElementLeft(e),top:this.DOM.getElementTop(e),lineHeight:t,lines:~~(n/t)}})).flatMap((e=>e.lines>1?this._breakItIntoLines(e):e.element)).reduce(((e,t,n,r)=>!e.length||this.DOM.isLineChanged(e.at(-1).at(-1),t)?(e.push([t]),e):e.length&&this.DOM.isLineKept(e.at(-1).at(-1),t)?(e.at(-1).push(t),e):void console.assert(!0,"newComplexChildrenGroups: An unexpected case of splitting a complex paragraph into lines.","\nOn the element:",t)),[]);if(t.length<this.minBreakableLines)return[];const n=t.slice(0,this.minLeftLines).flat(),r=t.slice(-this.minDanglingLines).flat();return t.splice(0,this.minLeftLines,n),t.splice(-this.minDanglingLines,this.minDanglingLines,r),t.map(((e,t)=>{const n=this.DOM.createPrintNoBreak();return n.dataset.index=t,this.DOM.insertBefore(e[0],n),this.DOM.insertAtEnd(n,...e),n}))}_breakItIntoLines(e){const t=e.element,n=this.DOM.splitByWordsGreedy(t),r=n.map(((e,t)=>{const n=this.DOM.create("html2pdf-s");return n.dataset.index=t,n.innerHTML=e+" ",n}));t.innerHTML="",this.DOM.insertAtEnd(t,...r);const i=r.reduce(((e,t,n)=>(n>0&&r[n-1].offsetTop+r[n-1].offsetHeight<=t.offsetTop&&e.push(n),e)),[0]),o=i.reduce(((e,r,o)=>{const s=this.DOM.cloneNodeWrapper(t),a=i[o],h=i[o+1],l=n.slice(a,h).join(" ")+" ";return this.DOM.setInnerHTML(s,l),this.DOM.insertBefore(t,s),o>0&&s.removeAttribute("id"),e.push(s),e}),[]);return console.assert(o.length==e.lines,"The number of new lines is not equal to the expected number of lines when splitting.","\nNew lines:",o,e.lines),t.remove(),o}_isVerticalFlowDisrupted(e){return e.some(((e,t,n)=>{const r=e,i=n[t+1];return!!i&&this.DOM.getElementRelativeBottom(r)>this.DOM.getElementRelativeTop(i)}))}_splitPreNode(e,t){const n=this.DOM.getElementRootedTop(e,this.root),r=this.DOM.getElementHeight(e),i=this.DOM.getLineHeight(e),o=this.DOM.getEmptyNodeHeight(e),s=(r-o)/i;if(s<this.minPreBreakableLines)return[];let a=this.DOM.getInnerHTML(e);"\n"===a.charAt(a.length-1)&&(a=a.slice(0,-1));const h=a.split("\n");if(h.length<this.minPreBreakableLines)return[];let l=t-n-o;const c=this.referenceHeight-o;let p=Math.trunc(l/i);const g=Math.trunc(c/i);p<this.minPreFirstBlockLines&&(l=this.referenceHeight,p=g);const d=s-p,u=(Math.floor(d/g),d%g);u<this.minPreLastBlockLines&&(p-=this.minPreLastBlockLines-u);const m=h.reduce(((e,t,n,r)=>(""===t?e.push([]):e[e.length-1].push(t),e)),[[]]).filter((e=>e.length));let f="",M="";m[0].length<this.minPreFirstBlockLines&&(f=m.shift().join("\n")+"\n\n"),m[m.length-1].length<this.minPreLastBlockLines&&(M="\n"+m.pop().join("\n"));const b=m.reduce(((e,t,n,r)=>{if(t.length<this.minPreBreakableLines)e.push(t.join("\n")+"\n");else{const n=t.slice(0,this.minPreFirstBlockLines).join("\n")+"\n",r=t.slice(this.minPreFirstBlockLines,-this.minPreLastBlockLines).map((e=>e+"\n")),i=t.slice(-this.minPreLastBlockLines).join("\n")+"\n";e.push(n),r.length&&e.push(...r),e.push(i)}return e.push("\n"),e}),[]);if("\n"===b[b.length-1]&&b.pop(),f.length&&(b[0]=f+b[0]),M.length&&(b[b.length-1]=b[b.length-1]+M),1===b.length)return[];const D=b.map((e=>{const t=this.DOM.createNeutral();return this.DOM.setInnerHTML(t,e),t})),O=this.DOM.createTestNodeFrom(e);this.DOM.insertAtEnd(O,...D),this.DOM.insertAtEnd(e,O);let E=0,T=[],P=l;for(let e=0;e<D.length;e++){const t=D[e];this.DOM.getElementRootedBottom(t,O)>P&&(T.push(e),E+=1,P=this.DOM.getElementRootedTop(t,O)+c)}T.push(null);const y=T.map(((t,n,r)=>{const i=this.DOM.cloneNodeWrapper(e);this.DOM.setPrintNoBreak(i);const o=r[n-1]||0,s=t||r[r.length];return this.DOM.insertAtEnd(i,...D.slice(o,s)),i}));return this.DOM.setInnerHTML(e,""),this.DOM.insertAtEnd(e,...y),e.style.display="content",e.classList="",y}_splitTableNode(e,t){this.debugMode&&console.log("%c WE HAVE A TABLE","color:orange"),this.debugMode&&console.time("_splitTableNode");const n=this.DOM.getEmptyNodeHeight(e),r=[...e.children].reduce((function(e,t){const n=t.tagName;return"TBODY"===n?{...e,rows:[...e.rows,...t.children]}:"CAPTION"===n?{...e,caption:t}:"COLGROUP"===n?{...e,colgroup:t}:"THEAD"===n?{...e,thead:t}:"TFOOT"===n?{...e,tfoot:t}:"TR"===n?{...e,rows:[...e.rows,...t]}:{...e,unexpected:[...e.unexpected,t]}}),{caption:null,thead:null,tfoot:null,rows:[],unexpected:[]});if(r.unexpected.length>0&&console.warn("something unexpected is found in the table"),r.rows.length<this.minBreakableRows)return[];const i=this.DOM.getElementRootedTop(e,this.root),o=this.DOM.getElementHeight(e),s=t-i-this.signpostHeight-n,a=this.referenceHeight-this.DOM.getElementHeight(r.thead)-this.DOM.getElementHeight(r.tfoot)-this.DOM.getElementHeight(r.caption)-2*this.signpostHeight-n,h=[...r.rows.map((t=>this.DOM.getElementRootedTop(t,e))),this.DOM.getElementRootedTop(r.tfoot,e)||o];let l=[],c=s;for(let e=0;e<h.length;e++)h[e]>c&&(e>this.minLeftRows&&l.push(e-1),c=h[e-1]+a);const p=h.length-1-this.minDanglingRows;l[l.length-1]>p&&(l[l.length-1]=p);const g=(t,n)=>{const i=this.DOM.cloneNodeWrapper(e),o=r.rows.slice(t,n),s=this.DOM.createPrintNoBreak();return e.before(s),t&&this.DOM.insertAtEnd(s,this.DOM.createSignpost("(table continued)",this.signpostHeight)),this.DOM.insertAtEnd(s,this.DOM.createTable({wrapper:i,caption:this.DOM.cloneNode(r.caption),thead:this.DOM.cloneNode(r.thead),tbody:o}),this.DOM.createSignpost("(table continues on the next page)",this.signpostHeight)),s},d=l.map(((e,t,n)=>g(n[t-1]||0,e))),u=this.DOM.createPrintNoBreak();return e.before(u),this.DOM.insertAtEnd(u,this.DOM.createSignpost("(table continued)",this.signpostHeight),e),this.debugMode&&console.timeEnd("_splitTableNode"),[...d,u]}_splitTextNode(e,t){const n=this.DOM.getElementRootedTop(e,this.root),r=this.DOM.getElementHeight(e),i=this.DOM.getLineHeight(e),o=t-n,s=function({pageLines:e,nodeLines:t,firstPartLines:n,minBreakableLines:r,minLeftLines:i,minDanglingLines:o}){let s=[];if(t<r)return[];n<i&&(n=e),function r(i=0){const o=e*i+n,a=i?o-e*(i-1):n;if(t>o)return s=[...s,{endLine:o,splitter:o/t,partLines:a}],void r(i+1);const h=t-(o-e);s=[...s,{endLine:null,splitter:null,partLines:h}]}();const a=s.length-2,h=s.length-1;if(s[h].partLines<o){const e=o-s[h].partLines,n=s[a].endLine-e,r=n/t;s[a]={endLine:n,splitter:r,partLines:s[a].partLines-e},s[h].partLines=s[h].partLines+e}return s}({nodeLines:~~(r/i),pageLines:~~(this.referenceHeight/i),firstPartLines:~~(o/i),minBreakableLines:this.minBreakableLines,minLeftLines:this.minLeftLines,minDanglingLines:this.minDanglingLines});if(s.length<2)return[];const{splittedNode:a,nodeWords:h,nodeWordItems:l}=this.DOM.prepareSplittedNode(e),c=s.map((({endLine:e,splitter:t})=>t?function({arr:e,floater:t,topRef:n,getElementTop:r,root:i}){const o=(t,s)=>{const a=t+1,h=e[a],l=r(h,i);return s<l&&l>=n?a:o(a,l)},s=(t,o)=>{const a=t-1,h=e[a],l=r(h,i);return l<o&&o>=n?t:s(a,l)},a=~~(e.length*t),h=r(e[a],i);return h<n?o(a,h):s(a,h)}({arr:l,floater:t,topRef:e*i,getElementTop:this.DOM.getElementRelativeTop,root:this.root}):null)).map(((e,t,n)=>{const r=this.DOM.createPrintNoBreak(),i=n[t-1]||0,o=e||n[n.length];return this.DOM.setInnerHTML(r,h.slice(i,o).join(" ")+" "),r}));return this.DOM.insertInsteadOf(a,...c),c}_getChildren(e){return[...this.DOM.getChildNodes(e)].reduce(((e,t)=>{if(this.DOM.isSignificantTextNode(t))return e.push(this.DOM.wrapTextNode(t)),e;if(!this.DOM.getElementOffsetParent(t)){const n=this._getChildren(t);return n.length>0&&e.push(...n),e}return this.DOM.isElementNode(t)?(e.push(t),e):void 0}),[])}_isSignificantChild(e){const t=this.DOM.getElementTagName(e);return"A"!==t&&"TT"!==t&&this.DOM.getElementHeight(e)>0}_canNotBeLast(e){const t=this.DOM.getElementTagName(e);return"H1"===t||"H2"===t||"H3"===t||"H4"===t||"H5"===t||"H6"===t}_isPRE(e){return"PRE"===this.DOM.getElementTagName(e)}_isIMG(e){return"IMG"===this.DOM.getElementTagName(e)}_isSVG(e){return"svg"===this.DOM.getElementTagName(e)}_isTextNode(e){return this.DOM.isNeutral(e)}_isTableNode(e){return"TABLE"===this.DOM.getElementTagName(e)}_isLiNode(e){return"LI"===this.DOM.getElementTagName(e)}_notSolved(e){return"OBJECT"===this.DOM.getElementTagName(e)}}class p{constructor({DOM:e,selector:t}){this.DOM=e,this.selector=t,this.frontpageTemplateSelector=t?.frontpageTemplate,this.headerTemplateSelector=t?.headerTemplate,this.footerTemplateSelector=t?.footerTemplate,this.paperBodySelector=t?.paperBody||".paperBody",this.paperHeaderSelector=t?.paperHeader||".paperHeader",this.paperFooterSelector=t?.paperFooter||".paperFooter",this.headerContentSelector=t?.headerContent||".headerContent",this.footerContentSelector=t?.footerContent||".footerContent",this.frontpageContentSelector=t?.frontpageContent||".frontpageContent",this.virtualPaperSelector=t?.virtualPaper||".virtualPaper",this.virtualPaperTopMarginSelector=t?.virtualPaperTopMargin||".virtualPaperTopMargin",this.virtualPaperBottomMarginSelector=t?.virtualPaperBottomMargin||".virtualPaperBottomMargin",this.pageNumberRootSelector=t?.pageNumberRoot||void 0,this.pageNumberCurrentSelector=t?.pageNumberCurrent||void 0,this.pageNumberTotalSelector=t?.pageNumberTotal||void 0,this.frontpageTemplate=this.DOM.getInnerHTML(this.frontpageTemplateSelector),this.headerTemplate=this.DOM.getInnerHTML(this.headerTemplateSelector),this.footerTemplate=this.DOM.getInnerHTML(this.footerTemplateSelector),this.paperHeight,this.headerHeight,this.footerHeight,this.bodyHeight,this.bodyWidth,this.frontpageFactor,this._calculatePaperParams()}create({currentPage:e,totalPages:t}){const n=this._createPaperBody(this.bodyHeight),r=this._createPaperHeader(this.headerTemplate),i=this._createPaperFooter(this.footerTemplate);return this._createPaper({header:r,body:n,footer:i,currentPage:e,totalPages:t})}createFrontpage({currentPage:e,totalPages:t}){const n=this._createFrontpageContent(this.frontpageTemplate,this.frontpageFactor),r=this._createPaperBody(this.bodyHeight,n),i=this._createPaperHeader(this.headerTemplate),o=this._createPaperFooter(this.footerTemplate);return this._createPaper({header:i,body:r,footer:o,currentPage:e,totalPages:t})}createVirtualTopMargin(){return this.DOM.create(this.virtualPaperTopMarginSelector)}createVirtualBottomMargin(){return this.DOM.create(this.virtualPaperBottomMarginSelector)}_createPaper({header:e,body:t,footer:n,currentPage:r,totalPages:i}){const o=this.DOM.create(this.virtualPaperSelector);return this.DOM.insertAtEnd(o,this.createVirtualTopMargin(),e,t,n,this.createVirtualBottomMargin()),r&&i&&(this._setPageNumber(e,r,i),this._setPageNumber(n,r,i)),o}_createFrontpageContent(e,t){const n=this.DOM.create(this.frontpageContentSelector);return e&&this.DOM.setInnerHTML(n,e),t&&this.DOM.setStyles(n,{transform:`scale(${t})`}),n}_createPaperBody(e,t){const n=this.DOM.create(this.paperBodySelector);return this.DOM.setStyles(n,{height:e+"px"}),t&&this.DOM.insertAtEnd(n,t),n}_createPaperHeader(e){const t=this.DOM.create(this.paperHeaderSelector);if(e){const n=this.DOM.create(this.headerContentSelector);this.DOM.setInnerHTML(n,e),this.DOM.insertAtEnd(t,n)}return t}_createPaperFooter(e){const t=this.DOM.create(this.paperFooterSelector);if(e){const n=this.DOM.create(this.footerContentSelector);this.DOM.setInnerHTML(n,e),this.DOM.insertAtEnd(t,n)}return t}_setPageNumber(e,t,n){const r=this.pageNumberRootSelector?this.DOM.getElement(this.pageNumberRootSelector,e):this.pageNumberRootSelector;if(r){const e=this.DOM.getElement(this.pageNumberCurrentSelector,r),i=this.DOM.getElement(this.pageNumberTotalSelector,r);this.DOM.setInnerHTML(e,t),this.DOM.setInnerHTML(i,n)}}_calculatePaperParams(){const e=this._createPaperBody(),t=this._createFrontpageContent(this.frontpageTemplate),n=this._createPaperHeader(this.headerTemplate),r=this._createPaperFooter(this.footerTemplate),i=this._createPaper({header:n,body:e,footer:r}),o=this.DOM.create("#workbench");this.DOM.setStyles(o,{position:"absolute",left:"-3000px"}),this.DOM.insertAtEnd(o,i),this.DOM.insertAtStart(this.DOM.body,o);const s=this.DOM.getElementBCR(i).height,a=this.DOM.getElementHeight(n)||0,h=this.DOM.getElementHeight(r)||0,l=this.DOM.getElementHeight(e),c=this.DOM.getElementWidth(e);this.DOM.insertAtStart(e,t);const p=this.DOM.getElementHeight(e),g=p>l?l/p:1;this.DOM.removeNode(o),a>.2*s&&console.warn("It seems that your custom header is too high"),h>.15*s&&console.warn("It seems that your custom footer is too high"),g<1&&console.warn("It seems that your frontpage content is too large. We made it smaller to fit on the page. Check out how it looks! It might make sense to fix this with styles or reduce the text amount."),this.paperHeight=s,this.headerHeight=a,this.footerHeight=h,this.bodyHeight=l,this.bodyWidth=c,this.frontpageFactor=g}}const g="border:1px solid #ee00ee;background:#EEEEEE;color:#ee00ee;";class d{constructor({debugMode:e,DOM:t,selector:n,pages:r,layout:i,paper:o}){this.debugMode=e,this.DOM=t,this.selector=n,this.virtualPaperGapSelector=n?.virtualPaperGap,this.runningSafetySelector=n?.runningSafety,this.printPageBreakSelector=n?.printPageBreak,this.pages=r,this.root=i.root,this.contentFlow=i.contentFlow,this.paperFlow=i.paperFlow,this.paper=o}create(){this.debugMode&&console.groupCollapsed("%c Preview ",g),this._processFirstPage(),this._processOtherPages(),this.debugMode&&console.groupEnd("%c Preview ",g)}_processFirstPage(){let e;if(this.paper.frontpageTemplate){const t=this._insertFrontpageSpacer(this.contentFlow,this.paper.bodyHeight);this.pages.unshift({pageStart:t}),e=this.paper.createFrontpage({currentPage:1,totalPages:this.pages.length})}else e=this.paper.create({currentPage:1,totalPages:this.pages.length});this._insertIntoPaperFlow(e),this._insertIntoContentFlow(this.pages[0].pageStart)}_processOtherPages(){for(let e=1;e<this.pages.length;e++){const t=this.paper.create({currentPage:e+1,totalPages:this.pages.length}),n=this._createVirtualPaperGap();this._insertIntoPaperFlow(t,n),this._insertIntoContentFlow(this.pages[e].pageStart,n)}}_insertIntoPaperFlow(e,t){this._insertPaper(this.paperFlow,e,t)}_insertIntoContentFlow(e,t){t&&this._insertFooterSpacer(e,this.paper.footerHeight,t),this._insertHeaderSpacer(e,this.paper.headerHeight)}_insertPaper(e,t,n){n?this.DOM.insertAtEnd(e,n,t):this.DOM.insertAtEnd(e,t)}_createVirtualPaperGap(){return this.DOM.create(this.virtualPaperGapSelector)}_createVirtualPaperTopMargin(){return this.paper.createVirtualTopMargin()}_createVirtualPaperBottomMargin(){return this.paper.createVirtualBottomMargin()}_insertFrontpageSpacer(e,t){const n=this.DOM.create();return this.DOM.setStyles(n,{paddingBottom:t+"px"}),this.DOM.setAttribute(n,".printFrontpageSpacer"),this.DOM.insertAtStart(e,n),n}_insertHeaderSpacer(e,t){const n=this.DOM.create(this.runningSafetySelector);t&&this.DOM.setStyles(n,{marginBottom:t+"px"});const r=this.DOM.createDocumentFragment();this.DOM.insertAtEnd(r,this._createVirtualPaperTopMargin(),n),this.DOM.insertBefore(e,r)}_insertFooterSpacer(e,t,n){const r=this.DOM.create(this.runningSafetySelector);t&&this.DOM.setStyles(r,{marginTop:t+"px"});const i=this._createVirtualPaperGap(),o=this.DOM.createDocumentFragment();this.DOM.insertAtEnd(o,r,this._createVirtualPaperBottomMargin(),this.DOM.create(this.printPageBreakSelector),i),this.DOM.insertBefore(e,o);const s=this.DOM.getElementRootedTop(n,this.root)-this.DOM.getElementRootedTop(i,this.root);this.DOM.setStyles(r,{marginBottom:s+"px"}),this.debugMode&&console.log("%c balancer ",g,s)}}const u="border:1px dashed #cccccc;background:#ffffff;color:#cccccc;",m=document.currentScript.dataset,f=new class{constructor(e){this.params=e,this.debugMode=this.config().debugMode}config(){return{...e(this.params),...this.params}}render(){this.debugMode&&console.time("printTHIS");const e=new r({DOM:window.document,debugMode:this.debugMode});e.insertStyle(new n(this.config()).create());const i=new o({debugMode:this.debugMode,DOM:e,selector:t}),s=new p({debugMode:this.debugMode,DOM:e,selector:t});i.create();const a=new c({debugMode:this.debugMode,DOM:e,layout:i,referenceHeight:s.bodyHeight,referenceWidth:s.bodyWidth}).calculate();new d({debugMode:this.debugMode,DOM:e,selector:t,layout:i,paper:s,pages:a}).create(),this.debugMode&&console.timeEnd("printTHIS")}}(m),M=new class{constructor(e){this.debugMode=e.debugMode,this.preloader,this.preloaderTarget=document.querySelector(e.preloaderTarget)||document.body,this.preloaderBackground=e.preloaderBackground||"white"}create(){this.debugMode&&console.groupCollapsed("%c Preloader ",u),this._insertStyle(),this.preloader=document.createElement("div"),this.preloader.classList.add("lds-dual-ring"),this.preloaderTarget.append(this.preloader),this.debugMode&&console.groupEnd("%c Preloader ",u)}remove(){if(!this.preloader)return;let e=1;const t=setInterval((()=>{e<=.1&&(clearInterval(t),this.preloader.remove()),this.preloader.style.opacity=e,e-=.1*e}),50);this.debugMode&&console.log("%c Preloader removed ",u)}_insertStyle(){const e=document.querySelector("head"),t=document.createElement("style");t.append(document.createTextNode(this._css())),t.setAttribute("data-preloader-style",""),e.append(t)}_css(){return`\n    /* PRELOADER */\n    .lds-dual-ring {\n      position: absolute;\n      z-index: 99999;\n      top: 0; left: 0; bottom: 0; right: 0;\n      background: ${this.preloaderBackground};\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    /*\n    .lds-dual-ring:after {\n      content: " ";\n      display: block;\n      width: 64px;\n      height: 64px;\n      margin: 8px;\n      border-radius: 50%;\n      border: 6px solid #eee;\n      border-color: #eee transparent #eee transparent;\n      animation: lds-dual-ring 1.2s linear infinite;\n    }\n    @keyframes lds-dual-ring {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n    */\n  `}}(m);window.addEventListener("load",(function(e){f.render()})),"true"===m.preloader&&(window.addEventListener("DOMContentLoaded",(function(e){M.create()})),window.addEventListener("load",(function(e){M.remove()})))})();