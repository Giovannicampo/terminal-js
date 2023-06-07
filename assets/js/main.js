class Terminal
{
    constructor () {
        this.newTerminal = document.createElement("div");
        this.id = null;
        this.isExpanded = false;
        this.isDragged = false;
        this.topBar = document.createElement("div");
        this.xButton = document.createElement("div");
        this.xIcon = document.createElement("img");
        this.minusButton = document.createElement("div");
        this.minusIcon = document.createElement("img");
        this.expandButton = document.createElement("div");
        this.expandIcon1 = document.createElement("img");
        this.expandIcon2 = document.createElement("img");
        this.sessionName = document.createElement("div");
        this.terminalBody = document.createElement("div");
        this.commandLine = document.createElement("div");
        this.userSpan = document.createElement("span");
        this.pathSpan = document.createElement("span");
        this.runSpan = document.createElement("span");
        this.inputLine = document.createElement("input");
        this.isIconed = false;
    }

    init (idTerminal) {
        this.newTerminal.classList.add("terminal");
        this.id = idTerminal;
        console.log("id creato = " + this.id);
        this.newTerminal.setAttribute("id",this.id);
        this.newTerminal.style.top = (200 + 20*idTerminal) + "px";
        this.newTerminal.style.left = (200 + 20*idTerminal) + "px";

        this.topBar.classList.add("top-bar");
        this.newTerminal.appendChild(this.topBar);

        this.xButton.classList.add("x");
        this.xIcon.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABwElEQVRIS72VQVaDMBCGZx6uYKE3sJ5AegLrxmdZ6QnsDYSTkJ5APYF1U95zo0fAG9Qb2AWs7BsnqUAgAaRa2SVv8n+TmT8Dwp4/3LM+9AJCL5kBwRkA+Yjoy4SIKAXAFAEXcX751JVkKyB0l1csEiPCqEuACFaMjEQeLGxxVkDkLQWL3w4pHwEJkQVR84wB2EW8EqV5nAWhDqkBZFm4zo9DMm/Gcn+u9XLVAJG7XAHi8Q8Ba447NAGwEvn0pNgvAdItvLgzxAkeCB2BsHnVBNcEzgRg49vO6LcoAZGb3LNpb4yMwBmL7CINvWcWUxB2rTMp9gA+X9iuR7VznFScT2dyTwekvDo1AfQBcHBeCQJ0in+/E+7DuA7wEmqrPVuwhMgYeRtr5ppAnE1V8tUNOgAcp2ouMy8AjZ4YuZkAN7GWSBffZl6VqBVC8MY9ULGDmizLsk216okVYmty2yPjWcPucuZ6zYueDLKpzGvIQ5MQw57Kw/Qe58GoaMr/jgp1ix0maWWhnmFXBO4GMcVrLmoaWTWdHdk7/Ljm/ELDQT8cHbYFIf/dwC9HCfuc1yk3etEmbG2y8Rz/YKP3p/9bxhdnne0Z51myeAAAAABJRU5ErkJggg==");
        this.topBar.appendChild(this.xButton);
        this.xButton.appendChild(this.xIcon);

        this.minusButton.classList.add("minus");
        this.minusIcon.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABT0lEQVRIS72VbXKCMBCGd7lI2xMUT9Ar2BPUmcofjaOepLQkv8BpPYH0JngDexHXDSMfQYQiwczwi+R9NvvxBmHghQPrQytgMfMmvOuFAFxEcHVARJDwQf4o/lLRb1OQVwFCvI+RnA8Wf2y8JcGB8LiWchPX7asFCOH5/GPZKX1EfqCidfXMBeAm8bMqp/FTynBVhhiANC3g7DpFXtlMcHwtp8sEzKcHRHzoAwCuSaDCp0wjB6Td4sB3L/E8VcUtcoCYT384+jcrAKKtVNFEaxUA4enefrYDgESqcGQAFsLjJjBXIMPWQdQnms4WNRgawP1vL0UAe56H1FbuWeT+Q5ZVsDxs1geNiP64RXODvK9V6CsOanZZDm+B1Dmp0UXVIdPOCoR+m/npnAPSqtODU4adQWNAdDMr4Wj3/G4mLBxfE75wUxseVKfxL6/pAz8Bt2ycGTKiWuUAAAAASUVORK5CYII=");
        this.topBar.appendChild(this.minusButton);
        this.minusButton.appendChild(this.minusIcon);

        this.expandButton.classList.add("expand");
        this.expandIcon1.classList.add("circle");
        this.expandIcon2.classList.add("square");
        this.expandIcon1.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABSklEQVRIS72VbXKCMBCGd7lI6wmkJ+gV7Al0RvmjcaonKUryCxzbE0hvgjewF3G7YeQjiDJIMDP8InmfzX68Qeh5Yc/60AhYzr0J73onABcRXB0QESR8kD+Ktyr6vRfkTYAQ0xGS88Xir3dvSXAiPK+l3MV1+2oBQng+//hslT4iP1DRunrmCvCQ+EWV07iRMlyVIQYgTQs4h1aRVzYTnD/K6TIBi9kJEV+6AIBrEqhwkGnkgLRbHNh3Es9TVdwiB4jF7JujH1sBEP1IFU20VgEQnu7toR0AJFKFbwZgKTxuAnsrkGEafFGDvgHc//ZSBHDkeUht5ZlF7j5kWQXLw2Z90Ijoj1s0N8jnWoW+Yq9ml+XwEUidkxpdVB0x7axA6DeZn845IK1aPThl2AU0AkQ3sxKO9sjvZsLC8S3hKze1ZxKmUuOj3xX8D3hglBltwLYkAAAAAElFTkSuQmCC");
        this.expandIcon2.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAfElEQVRIS2NkoDFgpLH5DPS1QFFR8QIjI6M+Jb76////hfv37xvCzEDxgZKS0n9KDIfpvXfvHtxcrBYgKyDFQpgDRy3AGWqjQUQwQY0G0WgQMTBgSwUEwwVJweBJRaS4GptanKUplSqci8AKxwBrhUOpy7Hpp2+dTAsfAAC1qYgZqEW01AAAAABJRU5ErkJggg==");
        this.topBar.appendChild(this.expandButton);
        this.expandButton.appendChild(this.expandIcon1);
        this.expandButton.appendChild(this.expandIcon2);

        this.sessionName.classList.add("session-name");
        this.sessionName.innerHTML = "giovanni@ubuntu: ~";
        this.topBar.appendChild(this.sessionName);

        this.terminalBody.classList.add("terminal-body");
        this.newTerminal.appendChild(this.terminalBody);

        this.commandLine.classList.add("command-line");
        this.terminalBody.appendChild(this.commandLine);

        this.userSpan.classList.add("user");
        this.userSpan.innerHTML = "giovanni@ubuntu:";
        this.commandLine.appendChild(this.userSpan);

        this.pathSpan.classList.add("path");
        this.pathSpan.innerHTML = "~";
        this.commandLine.appendChild(this.pathSpan);

        this.runSpan.classList.add("run");
        this.runSpan.innerHTML = "$";
        this.commandLine.appendChild(this.runSpan);

        this.inputLine.setAttribute("maxlength","93");
        this.inputLine.setAttribute("size","93");
        this.inputLine.setAttribute("type","text");
        this.commandLine.appendChild(this.inputLine);

        this.setEvents();
    }

    closeTerminal () {
        this.xButton.addEventListener("click", () =>{
            numOfOpenTerminals -= 1;
            footer.removeChild(terminalIconList[this.id].getObj());
            document.body.removeChild(this.newTerminal);
            this.newTerminal.id = -1;
            this.id = -2;
            let max_temp = -2;
            listIndex = 0;
            for(let term of terminalList){
                if(term.id != -2){
                    // console.log("id " + term.id);
                    listIndex = max(max_temp,term.id) + 1;
                    // console.log("max trovato " + listIndex);
                }
            }
            if(numOfOpenTerminals == 0){
                terminalIconList = []
                terminalList = []
            }
        })
    }

    expandReduceTerminal () {
        const originalTop = this.newTerminal.style.top;
        const originalLeft = this.newTerminal.style.left;

        // expand terminal / reduce terminal
        this.expandButton.addEventListener("click", () =>{
            if(!this.isExpanded){
                this.newTerminal.style.width = "100%";
                this.newTerminal.style.height = "100%";
                this.newTerminal.style.top = "0";
                this.newTerminal.style.left = "0";
                this.sessionName.style.left = "45%";
                this.inputLine.setAttribute("size","170");
                this.inputLine.setAttribute("maxlength","170");
                this.isExpanded = true;
            }
            else {
                this.newTerminal.style.width = "1000px";
                this.newTerminal.style.height = "600px";
                this.newTerminal.style.top = originalTop;
                this.newTerminal.style.left = originalLeft;
                this.sessionName.style.left = "420px";
                this.inputLine.setAttribute("size","70");
                this.inputLine.setAttribute("maxlength","70");
                this.isExpanded = false;
            }
        })
    }

    drag () {
        let firstX = -1;
        let firstY = -1;
        this.topBar.addEventListener("mousedown", (e) =>{
            if(!this.isDragged){
                this.topBar.style.cursor = "grab";
                this.newTerminal.style.zIndex = maxZindex;
                maxZindex +=1;
                this.isDragged = true;
                firstX = e.screenX;
                firstY = e.screenY;
                console.log("first x = " + firstX + " first y = " + firstY);
                }
        })

        window.addEventListener('mousemove', (event) => {
            let X = event.clientX;
            let Y = event.clientY;
            // console.log("X = " + X + " Y = " + Y);
            if(this.isDragged & firstX != -1 & firstY != -1){
                let offsetX = X - firstX;
                let offsetY = Y - firstY;
                if(this.isExpanded){
                    this.newTerminal.style.width = "1000px";
                    this.newTerminal.style.height = "600px";
                    this.newTerminal.style.top = (Y-20) + "px";
                    this.newTerminal.style.left = (200 + 20*this.id + offsetX) + "px";
                    this.sessionName.style.left = "420px";
                    this.inputLine.setAttribute("size","70");
                    this.inputLine.setAttribute("maxlength","70");
                    this.isExpanded = false;
                }
                // console.log("ci sonooooo");
                // console.log("offsetX = " + offsetX + " offsetY = " + offsetY);
                // console.log(this.newTerminal.style.top);
                this.newTerminal.style.top = (Y-20) + "px";
                // console.log(this.newTerminal.style.top);
                this.newTerminal.style.left = (200 + 20*this.id + offsetX) + "px";
            }
        })
        
        window.addEventListener("mouseup", () =>{
            if(this.isDragged){
                this.topBar.style.cursor = "auto";
                this.isDragged = false;
            }
        })

    }

    

    commands () {
        let enters = 0;
        let comLines = [];
        let colorText = "#fff";
        this.newTerminal.addEventListener("keypress", (event) =>{
            if(event.key === 'Enter'){
                enters +=1;
                if(this.inputLine.value == ""){
                    let newLine = document.createElement("div");
                    let newUserSpan = document.createElement("span");
                    let newPathSpan = document.createElement("span");
                    let newRunSpan = document.createElement("span");
                        if(enters <= 26){

                        newLine.classList.add("command-line");
                        newLine.classList.add("clone");
                        newUserSpan.classList.add("user");
                        newUserSpan.innerHTML = "giovanni@ubuntu:";
                        newUserSpan.style.top = 20*(enters-1) + "px";
                        newPathSpan.classList.add("path");
                        newPathSpan.innerHTML = "~";
                        newPathSpan.style.top = 20*(enters-1) + "px";
                        newRunSpan.classList.add("run");
                        newRunSpan.innerHTML = "$";
                        newRunSpan.style.top = 20*(enters-1) + "px";
                        this.terminalBody.appendChild(newLine);
                        newLine.appendChild(newUserSpan);
                        newLine.appendChild(newPathSpan);
                        newLine.appendChild(newRunSpan);
                        comLines.push(newLine);

                        this.userSpan.style.top = 20*enters + "px";
                        this.pathSpan.style.top = 20*enters + "px";
                        this.runSpan.style.top = 20*enters + "px";
                        this.inputLine.style.top = 20*enters + "px";
                        }
                        else{
                            for(let l of comLines){
                                this.terminalBody.removeChild(l);
                            }
                            enters = 0;
                            comLines = [];
                            this.userSpan.style.top = 20*enters + "px";
                            this.pathSpan.style.top = 20*enters + "px";
                            this.runSpan.style.top = 20*enters + "px";
                            this.inputLine.style.top = 20*enters + "px";
                        }
                    }
                    else{
                            let response = document.createElement("span");
                            response.classList.add("text");
                            response.style.color = colorText;

                            let newResponseLine = document.createElement("div");
                            newResponseLine.classList.add("command-line");
                            newResponseLine.classList.add("clone");
                            newResponseLine.appendChild(response);
                            this.terminalBody.appendChild(newResponseLine);

                            let newLine = document.createElement("div");
                            let newUserSpan = document.createElement("span");
                            let newPathSpan = document.createElement("span");
                            let newRunSpan = document.createElement("span");
                            newRunSpan.style.color = colorText;

                            switch(this.inputLine.value){
                                case "whoami":
                                    response.innerHTML = "giovanni";
                                    break;
                                case `color bg 0`:
                                    response.innerHTML = "background color changed to black";
                                    this.newTerminal.style.backgroundColor = `#000000bc`;
                                    break;
                                case `color bg 1`:
                                    response.innerHTML = "background color changed to dark green";
                                    this.newTerminal.style.backgroundColor = `#043601bc`;
                                    break;
                                case `color bg 2`:
                                    response.innerHTML = "background color changed to blue";
                                    this.newTerminal.style.backgroundColor = `#010a36bc`;
                                    break;
                                case `color bg default`:
                                    response.innerHTML = "background color changed to default color";
                                    this.newTerminal.style.backgroundColor = `#2d0922bc`;
                                    break;
                                case `color 0`:
                                    response.innerHTML = "text color changed to green";
                                    this.inputLine.style.color = `green`;
                                    colorText = "green";
                                    break;
                                case `color 1`:
                                    response.innerHTML = "text color changed to red";
                                    this.inputLine.style.color = `red`;
                                    colorText= "red";
                                    break;
                                case `color 2`:
                                    response.innerHTML = "text color changed to yellow";
                                    this.inputLine.style.color = `yellow`;
                                    colorText = "yellow";
                                    break;
                                case 'color default':
                                    response.innerHTML = "text color changed to white";
                                    this.inputLine.style.color = `white`;
                                    colorText = "white";
                                case 'clear':
                                    enters = 27;
                                    break;
                                case 'help':
                                    response.innerHTML = "color [0,1,2] text  <--> color bg [0,1,2] bg <--> whoami";
                                    break;
                                default:
                                    response.innerHTML = "unknown command"
                                    break;
                            }
                            

                            if(enters <= 26){
                                newLine.classList.add("command-line");
                                newLine.classList.add("clone");
                                newUserSpan.classList.add("user");
                                newUserSpan.innerHTML = "giovanni@ubuntu:";
                                newUserSpan.style.top = 20*(enters-1) + "px";
                                newPathSpan.classList.add("path");
                                newPathSpan.innerHTML = "~";
                                newPathSpan.style.top = 20*(enters-1) + "px";
                                newRunSpan.classList.add("run");
                                newRunSpan.innerHTML = "$";
                                newRunSpan.innerHTML += this.inputLine.value;
                                newRunSpan.style.top = 20*(enters-1) + "px";
                                this.terminalBody.appendChild(newLine);
                                newLine.appendChild(newUserSpan);
                                newLine.appendChild(newPathSpan);
                                newLine.appendChild(newRunSpan);
                                console.log(newLine);
                                comLines.push(newLine);

                                response.style.top = 20*(enters) + "px"; // non lo sto capendo
                                // response.style.top = "20px"; // non lo sto capendo
                                console.log(response.style.top);
                                comLines.push(newResponseLine);

                                this.userSpan.style.top = 20*(enters+1) + "px";
                                this.pathSpan.style.top = 20*(enters+1) + "px";
                                this.runSpan.style.top = 20*(enters+1) + "px";
                                this.inputLine.style.top = 20*(enters+1) + "px";
                                this.inputLine.value = "";

                                enters +=1;

                            } else {
                                for(let l of comLines){
                                    this.terminalBody.removeChild(l);
                                }
                                enters = 0;
                                comLines = [];
                                
                                response.style.top = 20*(enters) + "px";
                                comLines.push(newResponseLine);

                                this.userSpan.style.top = 20*(enters+1) + "px";
                                this.pathSpan.style.top = 20*(enters+1) + "px";
                                this.runSpan.style.top = 20*(enters+1) + "px";
                                this.inputLine.style.top = 20*(enters+1) + "px";
                                this.inputLine.value = "";
                            }

                }
            }
        })
    }

    iconize () {
        this.minusButton.addEventListener("click", ()=>{
            console.log("hidden");
            this.newTerminal.style.display = "none";
            this.isIconed = true;
            numOfHiddenTerminals += 1;
            // iconList[iconizedIcon].style.backgroundColor = "#440653bc";
            // iconizedIcon += 1;
            terminalIconList[this.id].getIcon().style.backgroundColor = "#440653bc";
            terminalIconList[this.id].setIconed(true);
        })
    }

    setEvents () {

        this.closeTerminal();
        this.expandReduceTerminal();
        this.drag();
        this.newTerminal.addEventListener("click", () =>{
            this.inputLine.focus();
        })
        this.commands();
        this.iconize();
    } 
    
    getObj () {
        return this.newTerminal;
    }

    getIsIconed () {
        return this.isIconed;
    }

    setIsIconed (bool) {
        this.isIconed = bool;
    }

    getId () {
        return this.id;
    }
}

max = function (i,j) {
    if(i > j){
        return i;
    }
    return j;
}

let terminalList = [];
let listIndex = 0;
let maxZindex = 1;
let numOfOpenTerminals = 0;
let numOfHiddenTerminals = 0;
let terminalIconList = [];
let footer = document.querySelector(".footer");

const main = () => {
    const Desktop = {
        terminalIcon: document.querySelector(".terminal-icon"),
        openNewTerminal: function () {
            const terminal = new Terminal();
            terminalList.push(terminal);
            terminal.init(listIndex);
            let newTerminal = terminal.getObj();
            newTerminal.style.zIndex = maxZindex;
            maxZindex +=1;
            // console.log("id = " + newTerminal.getAttribute("id"));
            document.body.appendChild(newTerminal);
            listIndex += 1;
            this.openNewTerminalIcon(terminal.getId());
            console.log(terminal.getId());
            // console.log("New Terminal! There are currently " + terminalList.length + " terminals on!")
        },
        openNewTerminalIcon: function (id) {
            const terminalIcon = new TerminalIconClone(id);
            terminalIconList.push(terminalIcon);
            terminalIcon.init();
            let newTerminalIcon = terminalIcon.getObj();
            footer.appendChild(newTerminalIcon);
        },
        init: function() {
            this.terminalIcon.addEventListener("click", () => {
                numOfOpenTerminals += 1;
                this.openNewTerminal();
            })

            
        }
    };

    Desktop.init();
};

window.onload = main;

class TerminalIconClone 
{
    constructor (id) {
        this.newTerminalIcon = document.createElement("div");
        this.icon = document.createElement("img");
        this.isIconed = false;
        this.id = id;
    }

    init () {
        this.newTerminalIcon.classList.add("terminal-icon");
        this.newTerminalIcon.classList.add("clone");
        this.icon.setAttribute("src","assets/pictures/terminal.png");
        this.icon.style.left = (180 + 60*numOfOpenTerminals) + "px";
        this.newTerminalIcon.appendChild(this.icon);
        this.setEvents ();
    } 

    setEvents () {
        this.newTerminalIcon.addEventListener("click", ()=>{
            if(this.isIconed){
                this.icon.style.backgroundColor = "transparent";
                this.isIconed = false;
                if(terminalList[this.id].getIsIconed()){
                    terminalList[this.id].getObj().style.display = 'inline-block';
                    terminalList[this.id].getObj().style.zIndex = maxZindex;
                    maxZindex += 1;
                    terminalList[this.id].setIsIconed(false);
                }
                this.isIconed = false;
                numOfHiddenTerminals -=1;
            }
        })
    }

    getObj () {
        return this.newTerminalIcon;
    }

    getIcon () {
        return this.icon;
    }

    setIconed (bool) {
        this.isIconed = bool;
    }

    getId () {
        return this.id;
    }

    setId (id) {
        this.id = id;
    }
}