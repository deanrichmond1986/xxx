function showNotification(message, type) {
    try {
        WebApp.HapticFeedback.impactOccurred('light');
    } catch {}
    
    const container = document.getElementById("notification-container");

    const notification = document.createElement("div");
    notification.className = "notification";

    type_msg = "";
    switch (type) {
        case "error":
            type_msg = "❌ ";
            break;
        case "done":
            type_msg = "✅ ";
            break;
    }

    notification.innerText = type_msg + message;

    container.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = "0";
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}
