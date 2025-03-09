document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const headerMenu = document.getElementById("header_menu");

  // ハンバーガーメニューをクリック時の処理
  hamburger.addEventListener("click", function () {
    this.classList.toggle("active"); // ハンバーガーメニューのアニメーション
    headerMenu.classList.toggle("active"); // メニューの表示/非表示を切り替え
  });

  // メニュー内のリンクをクリックしたらメニューを閉じる
  document.querySelectorAll(".header_menu a").forEach(link => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      headerMenu.classList.remove("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question_grop");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const isOpen = answer.classList.contains("open");

      // すべての回答を閉じる
      document.querySelectorAll(".question_text").forEach((el) => {
        el.style.maxHeight = "0px";
        el.classList.remove("open");
      });

      document.querySelectorAll(".question_grop").forEach((el) => {
        el.classList.remove("active");
      });

      // クリックされたものだけ開く
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.classList.add("open");
        this.classList.add("active");

        // **SP時にスクロール位置を調整**
        if (window.innerWidth <= 768) {
          const questionOffset = this.getBoundingClientRect().top + window.scrollY;
          const scrollToPosition = questionOffset - 100; // 100pxの余白を確保
          window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
        }
      }
    });
  });
});





