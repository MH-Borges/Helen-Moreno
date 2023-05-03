// for another helper function that calculates the exact progress value along a motion path where it'll hit the center of the provided target on the given axis ("y" by default), see https://codepen.io/GreenSock/pen/BaPdrKM
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.set("#motionSVG", { scale: 0.7, autoAlpha: 1 });
gsap.set("#foguete", {transformOrigin: "50% 50%"});
let rotateTo = gsap.quickTo("#foguete", "rotation"),
    prevDirection = 0;

gsap.to("#motionSVG", {
  scrollTrigger: {
    trigger: "#motionPath",
    start: "5% center",
    // end: () => "+=" + document.querySelector("#motionPath").getBoundingClientRect().height,
    end: "93% center",
    scrub: 0.5,
    markers: false,
    onUpdate: self => {
      if (prevDirection !== self.direction) { // only run this when we're changing direction
        rotateTo(self.direction === 1 ? 0 : -180);
        prevDirection = self.direction;
      }
    }
  },
  ease: pathEase("#motionPath"), // a custom ease that helps keep the tractor centered
  immediateRender: true,
  motionPath: {
    path: "#motionPath",
    align: "#motionPath",
    alignOrigin: [0.5, 0.5],
    autoRotate: 90,
  }
});

// helper function that returns and ease that bends time to ensure the tractor stays relatively centered. Requires MotionPathPlugin of course
function pathEase(path, axis="y", precision=1) {
		let rawPath = MotionPathPlugin.cacheRawPathMeasurements(MotionPathPlugin.getRawPath(gsap.utils.toArray(path)[0]), Math.round(precision * 12)),
			useX = axis === "x",
			start = rawPath[0][useX ? 0 : 1],
      end = rawPath[rawPath.length - 1][rawPath[rawPath.length-1].length - (useX ? 2 : 1)],
			range = end - start,
			l = Math.round(precision * 200),
			inc = 1 / l,
			positions = [0],
			a = [],
			minIndex = 0,
			getClosest = p => {
				while (positions[minIndex] <= p && minIndex++ < l) { }
				a.push((p - positions[minIndex-1]) / (positions[minIndex] - positions[minIndex - 1]) * inc + minIndex * inc);
			},
			i = 1,
			p, v;
		for (; i < l; i++) {
			p = i / l;
			v = MotionPathPlugin.getPositionOnPath(rawPath, p)[axis];
			positions[i] = (v - start) / range;
		}
		positions[l] = 1;
		for (i = 0; i < l; i++) {
			getClosest(i / l);
		}
		a.push(1);
		return p => {
			let i = p * l,
				s = a[i | 0];
			return s + (a[Math.ceil(i)] - s) * (i % 1);
		}
	}


$('.toTopInsti').on('click', function(){
  $("html, body").animate({ scrollTop: 0 }, 400);
  $('.foguete').addClass('subindo');
  setTimeout(() => { 
    $('.foguete').removeClass('subindo');
  }, 750)
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if(document.documentElement.clientHeight >= 700){
    if (scroll >= 5500) {
      $(".toTopInsti").addClass('sobe');
      $(".toTopInsti").fadeIn();
      setTimeout(() => { 
        $('.toTopInsti').removeClass('sobe');
        $('.toTopInsti').addClass('sobePara');
      }, 1250);
    } else {
      $(".toTopInsti").fadeOut();
      $('.toTopInsti').removeClass('sobePara');
    }
  }
  else{
    if (scroll >= 3700) {
      $(".toTopInsti").addClass('sobe');
      $(".toTopInsti").fadeIn();
      setTimeout(() => { 
        $('.toTopInsti').removeClass('sobe');
        $('.toTopInsti').addClass('sobePara');
      }, 1250);
    } else {
      $(".toTopInsti").fadeOut();
      $('.toTopInsti').removeClass('sobePara');
    }
  }
  
});