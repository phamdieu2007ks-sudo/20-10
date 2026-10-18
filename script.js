document.addEventListener("DOMContentLoaded", () => {
    const lockScreen = document.getElementById("lock-screen");
    const mainSite = document.getElementById("main-site");
    const passwordInput = document.getElementById("password");
    const unlockBtn = document.getElementById("unlock-btn");
    const errorMessage = document.getElementById("error-message");

    const correctPassword = "1501";

    function unlock() {
        if (passwordInput.value === correctPassword) {
            lockScreen.style.display = "none";
            mainSite.classList.remove("hidden");
            window.scrollTo(0, 0);
        } else {
            errorMessage.textContent = "Mật khẩu không đúng rồi 🥺 Vui lòng nhập lại nhé!";
            passwordInput.value = "";
            passwordInput.focus();

            passwordInput.animate(
                [
                    { transform: "translateX(0)" },
                    { transform: "translateX(-7px)" },
                    { transform: "translateX(7px)" },
                    { transform: "translateX(0)" }
                ],
                { duration: 300 }
            );
        }
    }

    unlockBtn.addEventListener("click", unlock);

    passwordInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            unlock();
        }
    });

    // MENU ĐIỆN THOẠI
    const menuBtn = document.getElementById("menu-btn");
    const nav = document.getElementById("nav");

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    document.querySelectorAll("#nav a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
        });
    });

    // POPUP CHO CÁC NÚT
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    const closeModal = document.getElementById("close-modal");
    const modalOk = document.getElementById("modal-ok");

    function showMessage(message) {
        modalText.textContent = message;
        modal.classList.remove("hidden");
    }

    function hideMessage() {
        modal.classList.add("hidden");
    }

    document.querySelectorAll("[data-message]").forEach(button => {
        button.addEventListener("click", () => {
            showMessage(button.dataset.message);
        });
    });

    closeModal.addEventListener("click", hideMessage);
    modalOk.addEventListener("click", hideMessage);

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            hideMessage();
        }
    });

    // NÚT BẤT NGỜ 20-10
    document.getElementById("surprise-btn").addEventListener("click", () => {
        showMessage(
            "🎀 Bất ngờ thật ra rất đơn giản: chúc em không chỉ hôm nay mà cả những ngày bình thường cũng luôn vui vẻ, được yêu thương và gặp thật nhiều điều tốt đẹp. Happy 20-10! 💗"
        );
    });

    // VỀ ĐẦU
    document.getElementById("top-btn").addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
