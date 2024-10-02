// الانتقال إلى صفحة الدردشة العامة
function startPublicChat() {
    window.location.href = 'room.html';
}

// إنشاء رابط غرفة خاصة
function createRoom() {
    const roomId = generateRoomId();
    window.location.href = `room.html?room=${roomId}`;
}

// توليد معرف غرفة عشوائي
function generateRoomId() {
    return Math.random().toString(36).substr(2, 9);
}

// جلب معرف الغرفة الحالي (إذا كان موجودًا)
function getRoomId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('room') || 'public';
}

// جلب الرسائل المخزنة من التخزين المحلي
function loadMessages() {
    const roomId = getRoomId();
    const messages = JSON.parse(localStorage.getItem(roomId)) || [];
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = messages.map(msg => `<div>${msg}</div>`).join('');
    chatBox.scrollTop = chatBox.scrollHeight;
}

// إرسال رسالة وتخزينها في التخزين المحلي
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    if (message) {
        const roomId = getRoomId();
        const messages = JSON.parse(localStorage.getItem(roomId)) || [];
        messages.push(message);
        localStorage.setItem(roomId, JSON.stringify(messages));
        messageInput.value = '';
        loadMessages();
    }
}

// تحميل الرسائل عند فتح الصفحة
if (document.getElementById('chat-box')) {
    loadMessages();
}


// _____________________________________________________________________
// _____________________________________________________________________
// _____________________________________________________________________
// استيراد المكتبات اللازمة من Firebase
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// // كود تهيئة Firebase - استبدل المعلومات بالمعلومات الخاصة بمشروعك
// const firebaseConfig = {
//     apiKey: "AIzaSyCURIIlQwTGKaplFmiGibd0JRwxZa8w0hg",
//     authDomain: "chatroomssh.firebaseapp.com",
//     databaseURL: "https://chatroomssh-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "chatroomssh",
//     storageBucket: "chatroomssh.appspot.com",
//     messagingSenderId: "218367074492",
//     appId: "1:218367074492:web:e3611701318485f1bc70b9",
//     measurementId: "G-1SF550NNZQ"
//   };

// // تهيئة Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// // الانتقال إلى صفحة الدردشة العامة
// function startPublicChat() {
//     window.location.href = 'room.html';
// }

// // إنشاء رابط غرفة خاصة
// function createRoom() {
//     const roomId = generateRoomId();
//     window.location.href = `room.html?room=${roomId}`;
// }

// // توليد معرف غرفة عشوائي
// function generateRoomId() {
//     return Math.random().toString(36).substr(2, 9);
// }

// // جلب معرف الغرفة الحالي (إذا كان موجودًا)
// function getRoomId() {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get('room') || 'public';
// }

// // جلب الرسائل من Firebase
// function loadMessages() {
//     const roomId = getRoomId();
//     const chatBox = document.getElementById('chat-box');
//     const messagesRef = ref(database, 'chats/' + roomId);

//     // الاستماع للتحديثات في الرسائل من Firebase وعرضها في صندوق الدردشة
//     onValue(messagesRef, (snapshot) => {
//         const messages = snapshot.val() || [];
//         chatBox.innerHTML = Object.values(messages).map(msg => `<div>${msg}</div>`).join('');
//         chatBox.scrollTop = chatBox.scrollHeight;
//     });
// }

// // إرسال رسالة وتخزينها في Firebase
// function sendMessage() {
//     const messageInput = document.getElementById('message-input');
//     const message = messageInput.value.trim();
//     if (message) {
//         const roomId = getRoomId();
//         const messagesRef = ref(database, 'chats/' + roomId);

//         // دفع الرسالة إلى Firebase
//         push(messagesRef, message);
//         messageInput.value = ''; // إعادة تعيين حقل الإدخال بعد الإرسال
//     }
// }

// // تحميل الرسائل عند فتح الصفحة
// if (document.getElementById('chat-box')) {
//     loadMessages();
// }
