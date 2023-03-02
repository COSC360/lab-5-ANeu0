var allPageElements

window.onload = function () {
    allPageElements = Array.from(document.body.getElementsByTagName("*"));
    allPageElements.forEach(e => {
        if (e.nodeType != 3) {
            var Node = document.createElement("div")
            Node.className = "hoverNode"
            Node.appendChild(document.createTextNode(e.tagName))
            Node.classList.add("yellow")
            e.appendChild(Node)
        }
    })
    setListeners()
}

function setListeners() {
    var allHoverNodes = Array.from(document.body.getElementsByClassName("hoverNode"))
    allHoverNodes.forEach(
        e => {
            e.addEventListener("click", function () { getInfo(e) })
        })
}

function getInfo(e) {
    let pNode = e.parentNode
    var pNodeId = "No ID."
    var pNodeInnerHTML = "No Inner HTML."
    if (pNode != undefined) {
        if (pNode.id != undefined && pNode.id != "") {
            pNodeId = pNode.id
        }
        if (pNode.innerHTML != undefined) {
            pNodeInnerHTML = pNode.innerHTML
        }
    }
    alert("Node ID: " + pNodeId + "\nNode Inner HTML: " + pNodeInnerHTML)
}