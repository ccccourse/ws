const sidebar = document.querySelector('aside')

sidebar.style.width = '0px'

function toggleSidebar() {
  sidebar.style.width = (sidebar.style.width === '0px') ? '200px' : '0px'
}
