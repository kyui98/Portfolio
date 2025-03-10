
// GSAPとSplitTextのプラグインを登録
gsap.registerPlugin(SplitText, ScrollTrigger);

// 共通のSplitText処理を関数化
function splitAndAnimate(selector, staggerDelay) {
  const split = new SplitText(selector, { type: "words,chars,lines" });
  const chars = split.chars;
  gsap.set(chars, { autoAlpha: 0, scale: 0, y: 30, rotationX: 10 });
  return gsap.to(chars, {
    autoAlpha: 1,
    scale: 1,
    y: 0,
    rotationX: 0,
    stagger: staggerDelay,
    transformOrigin: "0% 50%",
    ease: "power2.out",
  });
}

// start -----------------------------------------------------------------------------------//
//
//			#headerのアニメーション
// 

const headerH2 = new SplitText('.first-view .text h2 .catch', { type: 'words,chars,lines' });//単語,文字,行単位で
const headerH1 = new SplitText('.first-view .text h1 .catch', { type: 'words,chars,lines' });

gsap.set([headerH2.words, headerH1.chars], { 
  autoAlpha: 0, 
  y: 100, 
  rotationX: 5 
});
gsap.set('.first-view .text ul li', { 
  autoAlpha: 0, 
  y: 100 
});
  

const headerAnimation = gsap.timeline();

headerAnimation
.from('.header_wrap img', { autoAlpha: 0, x: -100, filter: 'blur(30px)' })
.from('.header_wrap .hamburger', { autoAlpha: 0, y: 60, stagger: 0.1}, '<')
.to(headerH2.words, { autoAlpha: 1, y: 0, rotationX: 0, stagger: 0.05, ease: "power2.out" })
.to(headerH1.chars, { autoAlpha: 1, y: 0, rotationX: 0, stagger: 0.025, ease: "power2.out" })
.to('.first-view .text ul li', { autoAlpha: 1, y: 0, stagger: 0.06 }, '-=0.2')
.from('.first-view .text .sentence', { autoAlpha: 0, y: 100 }, '-=0.2')
.from('.first-view .splide', { autoAlpha: 0, y: 200, x: 200 }, '<')


// start -----------------------------------------------------------------------------------//
//
//			.whatのアニメーション
//

const whatAnimation = gsap.timeline({
	scrollTrigger: {
		trigger: ".what",
		start: 'top 60%',
	},
});
  
whatAnimation
.from(".what .back p", { autoAlpha: 0, y: -100 }, "<=0.1")
.from(".what .container .mark-wrapper ul li", { autoAlpha: 0, y: 100, stagger: 0.2 }, "<")
.add(splitAndAnimate(".what .container .text h2", 0.04), "<")
.add(splitAndAnimate(".what .container .text .sentence", 0.01), "<=0.15")


// start -----------------------------------------------------------------------------------//
//
//			.conceptのアニメーション
//
const conceptAnimation= gsap.timeline({
	scrollTrigger: {
		trigger: ".concept",
		start:'top 45%',
	},
});

conceptAnimation
.from(".concept img", { autoAlpha: 0, filter: "blur(30px)", x:100, y:100, duration:1.75})
.from(".concept .concept_text h2",{ autoAlpha: 0, y:-50 },"<=0.5")
.from(".concept .concept_text h3",{ autoAlpha: 0, y:50 },"<=0.1")
.from(".concept .concept_text p",{ autoAlpha: 0, y:100, duration:1.5 },"<=1")



// start -----------------------------------------------------------------------------------//
//
//			.productsのアニメーション
//
// title アニメーション
const productsTitleAnimation = gsap.timeline({
  defaults: {
    autoAlpha: 0,
    filter: "blur(30px)",
    y: 100,
    duration: 0.75,
  },
  scrollTrigger: {
    trigger: ".products",
    start: 'top 45%',
  },
});

productsTitleAnimation
  .from(".products h2", { duration: 1.0 })
  .from(".products_wrap .products_grop h3", {}, "<=0.25");

// .products_wrap .products_grop 要素を配列として取得
const productBoxes = gsap.utils.toArray(".products_wrap .products_grop");

// 各ボックスに対してアニメーションを設定
productBoxes.forEach((target) => {
  // 子要素の取得
  const img = target.querySelector("img");
  const title = target.querySelector("products_grop h3");
  const listItems = target.querySelectorAll(".products_list span");
  const paragraph = target.querySelectorAll("p");
  const button = target.querySelector(".products_btn");

  // タイムラインの作成とデフォルト設定
  const productBoxAnimation = gsap.timeline({
    defaults: {
      autoAlpha: 0,
      filter: "blur(30px)",
      y: 100,
      duration: 0.75,
    },
    scrollTrigger: {
      trigger: target,
      start: 'top 55%',
    },
  });

  // アニメーションの定義
  productBoxAnimation
    .from(img, { x: 100, duration: 1.0, ease: "power2.out" }) // 画像をフェードインしながらスライド
    .from(title, { x: -50, duration: 0.5 }, "<=0.25") // タイトルをスライド表示
    .from(listItems, { x: 100, stagger: 0.1, duration: 0.5 }, "-=0.5") // スパンを順番に表示
    .from(paragraph, { y: 50, stagger: 0.1, duration: 0.5 }, "-=0.3") // 段落を順番に表示
    .from(button, { y: 20, duration: 0.5, ease: "power2.out" }, "-=0.2"); // ボタンをフェードインしながらスライド
});















// start -----------------------------------------------------------------------------------//
//
//			.featureのアニメーション
//













// start -----------------------------------------------------------------------------------//
//
//			.meritのアニメーション
//
















// start -----------------------------------------------------------------------------------//
//
//			.flowのアニメーション
//















// start -----------------------------------------------------------------------------------//
//
//			.ctaのアニメーション
//















// start -----------------------------------------------------------------------------------//
//
//			.footerのアニメーション
//













