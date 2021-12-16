const tabs = document.querySelector('.tabs');
const tabBtn = tabs.querySelectorAll('[role="tab"]');// look within tabs class for elements with the role of tab
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');// look within tabs class for elements with the role of tabpanel
tabBtn.forEach(btn => btn.addEventListener('click',handleTabClick));

function handleTabClick(btn){ 
    console.log(btn.currentTarget);
    // Hide all panels
    tabPanels.forEach(panels => hidePanel(panels))
    //Mark all tabs unselected
    tabBtn.forEach(btns => unselect(btns))
    // mark clicked tab as selected 
    markedClick(btn.currentTarget)
    //find the associated tabPanel and show it 
    displayPanel(btn.currentTarget)
}

function hidePanel(panels) {
    //Hide all panels
    panels.hidden = true;
}

function unselect(btns) {
    //Mark all tabs unselected
    btns.setAttribute('aria-selected', false);
}

function markedClick(current) {
    // Mark clicked tabs as selected
    current.setAttribute('aria-selected', true);
} 

function displayPanel(current) {
    // Find the associated tabPanel and display it 
    const id  = current.id;
    const panelToDisplay = tabs.querySelector(`[aria-labelledby=${id}]`);
    panelToDisplay.hidden = false
}
