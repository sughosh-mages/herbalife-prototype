if (window.innerHeight < window.innerWidth) {
    alert("Please use Potrait mode");
}
AFRAME.registerComponent('markerhandler', {
    init: function () {
        this.el.sceneEl.addEventListener('markerFound', () => {
            let dos = getDosage();
            let nut = getNut();
            let ing = getIng();
            dos.setAttribute('style', 'visibility:visible');
            nut.setAttribute('style', 'visibility:visible');
            ing.setAttribute('style', 'visibility:visible');
        });

        this.el.sceneEl.addEventListener('markerLost', () => {
            let dos = getDosage();
            let nut = getNut();
            let ing = getIng();
            dos.setAttribute('style', 'visibility:hidden');
            nut.setAttribute('style', 'visibility:hidden');
            ing.setAttribute('style', 'visibility:hidden');
        });

    }
});

function getDosage() {
    return val = document.getElementById("dosageButton");
}
function getNut() {
    return val = document.getElementById("targetnutButton");
}
function getIng() {
    return val = document.getElementById("ingredientButton");
}

function deleteElements(val) {
    // dosage
    let stime = document.getElementById('stime');
    let sun = document.getElementById('sun');
    let mtime = document.getElementById('mtime');
    let moon = document.getElementById('moon');

    //ingredients
    let in1 = document.getElementById('in1');
    let in2 = document.getElementById('in2');
    let in3 = document.getElementById('in3');
    let in4 = document.getElementById('in4');
    switch (val) {
        case 1:
            // if dosage
            if (in1) in1.remove();
            if (in2) in2.remove();
            if (in3) in3.remove();
            if (in4) in4.remove();
            break;
        case 2:
            //if ingredients
            if (stime) stime.remove();
            if (sun) sun.remove();
            if (mtime) mtime.remove();
            if (moon) moon.remove();
            break;
    }
}

function TapDosage() {
    deleteElements(1);
    let target = document.getElementById("AR_Scene");
    let loading = document.getElementById("loadingDiv");
    loading.style.display = "flex";
    target.innerHTML += '<a-plane src="textures/dos/9.png" id="stime" class="intersectable" width="10" height="10"                position="-10 1 -80" rotation="270 0 0" color="#FFFFFF" transparent=False emitevents="true" button>            </a-plane>            <a-plane src="textures/dos/sun.png" id="sun" class="intersectable" width="25" height="25"                position="-10 0.8 -80" rotation="270 0 0" color="#FFFFFF" transparent=True emitevents="true" button>            </a-plane>            <a-plane src="textures/dos/9.png" id="mtime" class="intersectable" width="10" height="10"                position="-10 1 -50" rotation="270 0 0" color="#FFFFFF" transparent=False emitevents="true" button>            </a-plane>            <a-plane src="textures/dos/moon.png" id="moon" class="intersectable" width="25" height="25" position="-10 0.8 -50"                rotation="270 0 0" color="#FFFFFF" transparent=True emitevents="true" button>            </a-plane>';
    setTimeout(function () {
        loading.style.display = "none";
    }, 5000);
}

function TapIngredients() {
    deleteElements(2);
    let target = document.getElementById("AR_Scene");
    let loading = document.getElementById("loadingDiv");
    loading.style.display = "flex";
    target.innerHTML += '<a-plane src="textures/in1.png" id="in1" class="intersectable" width="20" height="20"                position="-10 1 -110" rotation="270 0 0" color="#FFFFFF" transparent=False emitevents="true" button>            </a-plane>            <a-plane src="textures/in2.png" id="in2" class="intersectable" width="20" height="20"                position="-10 0.8 -90" rotation="270 0 0" color="#FFFFFF" transparent=True emitevents="true" button>            </a-plane>            <a-plane src="textures/in3.png" id="in3" class="intersectable" width="20" height="20" position="-10 1 -70" rotation="270 0 0" color="#FFFFFF" transparent=False emitevents="true" button>            </a-plane>            <a-plane src="textures/in4.png" id="in4" class="intersectable" width="20" height="20" position="-10 0.8 -50"                rotation="270 0 0" color="#FFFFFF" transparent=True emitevents="true" button>            </a-plane>';
    setTimeout(function () {
        loading.style.display = "none";
    }, 5000);
}

function TapTar() {
    window.location = "https://www.herbalife.com.sg/";
}
