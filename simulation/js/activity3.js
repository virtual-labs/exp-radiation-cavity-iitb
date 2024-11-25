let act3_div;
function activity3(btn) {
    btn && btn.remove();
    internal_calculation3();
    let btn_text = get_collapse_btn_text('Activity 3', 'act3-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act3-div'>
      <h3>Activity 3</h3>
      <br>
      <br>
      <img src="./images/fig3.png" style="width:30%">
      <br>
      <br>
      <p style="text-align:left;">
         A spherical cavity of radius ${R_cm_a3}cm is made in a large flat metal plate. <br>
         The cavity has a circular opening to the atmosphere. The radius of circular opening is ${r_cm_a3}cm. <br>
         The surface of the cavity iis at ${T1_C_a3}&deg;C. Neglect heat conduction and convection. <br>
         The emissivity is ${e_a3}. <br>
         Calculate the net radiative heat loss. The atmospheric temperature is ${T2_C_a3}&deg;C.
      </p>
      <br>
      <p class="fs-24px fb-600" style="text-align:left;">
         Area of sector ABC
      </p>
      <p>
         $$
            \\begin{aligned}
               r &= Rsinβ \\\\
               dr &= Rdβ \\\\
               \∴ dA &= 2\πrdr \\\\
               &= 2\πRsin\βR.d\β \\\\
               \∠BOC &= sin^{-1}\\frac{BC}{OC}
            \\end{aligned}
         $$
      </p>
      <div id="act3-ang-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$ \∠BOC =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-ang-inp' class='form-control fs-16px' /><span style="display:contents;"> &deg;</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_ang();' id='act3-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act3-div');
    }, 150);
    act3_div = document.getElementById('act3-div');
}
function internal_calculation3() {
    ang_a3 = parseFloat((Math.asin(5 / 10) * (180 / Math.PI)).toFixed(2));
    As_a3 =
        2 * Math.PI * Math.pow(R_m_a3, 2) * (1 - Math.cos(ang_a3 * (Math.PI / 180)));
    A1_a3 = 4 * Math.PI * Math.pow(R_m_a3, 2) - As_a3;
    A2_a3 = Math.PI * Math.pow(r_m_a3, 2);
    F_11_a3 = 1 - A2_a3 / A1_a3;
    Q_a3 =
        (A1_a3 * sigma * e_a3 * (Math.pow(T1_K_a3, 4) - Math.pow(T2_K_a3, 4)) * (1 - F_11_a3)) /
            (1 - F_11_a3 * (1 - e_a3));
    console.log('ang_a3', ang_a3);
    console.log('As_a3', As_a3);
    console.log('A1_a3', A1_a3);
    console.log('F_11_a3', F_11_a3);
    console.log('Q_a3', Q_a3);
}
function a3_verify_ang() {
    let inp = (document.getElementById('act3-ang-inp'));
    console.log(ang_a3);
    if (!verify_values(parseFloat(inp.value), ang_a3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-ang-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\∠BOC = ${parseFloat(ang_a3.toFixed(2))} \° $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <p>
         $$
            \\begin{aligned}
               \∴A_s &= \∫_0^{30} dA = \∫_0^{30} 2\π R^2sin\β.d\β \\\\
               \∴ A_s &= 2\πR^2[-cos\β]_0^{30} \\\\
               &= 2\πR^2[1-cos30]
            \\end{aligned}
         $$
      </p>
      <div id="act3-As-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$A_s =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='text' style="margin:0 2%; width:70%" id='act3-As-inp' class='form-control fs-16px' /><span style="display:contents;">m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_As();' id='act3-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verify_As() {
    let inp = (document.getElementById('act3-As-inp'));
    console.log(As_a3);
    if (!verify_values(parseFloat(inp.value), As_a3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-As-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$A_s = ${parseFloat(As_a3.toFixed(4))} \\ m^2 $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Area of cavity
      </p>
      <p>
         $$
               A_1 = \\text{Area of sphere} - \\text{Area of cavity}
         $$
      </p>
      <div id="act3-A1-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$A_1 = 4\πR^2 - A_s = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-A1-inp' class='form-control fs-16px' /><span style="display:contents;">m<sup>2</sup></span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_A1();' id='act3-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verify_A1() {
    let inp = (document.getElementById('act3-A1-inp'));
    console.log(A1_a3);
    if (!verify_values(parseFloat(inp.value), A1_a3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-A1-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$A_1 = 4\πR^2 - A_s =  ${parseFloat(A1_a3.toFixed(4))} \\ m^2 $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Area of opening
      </p>
      <div id="act3-A2-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$ A_2 = \πr^2 = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-A2-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>2</sup></span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_A2();' id='act3-vf-btn4'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verify_A2() {
    let inp = (document.getElementById('act3-A2-inp'));
    console.log(A2_a3);
    if (!verify_values(parseFloat(inp.value), A2_a3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-A2-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$A_2 = \πR^2 =  ${parseFloat(A2_a3.toFixed(4))} \\ m^2 $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <div id="act3-F-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$F_{1-1} = 1 - \\frac{A_2}{A_1} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-F-inp' class='form-control fs-16px' />
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_F();' id='act3-vf-btn5'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verify_F() {
    let inp = (document.getElementById('act3-F-inp'));
    console.log(F_11_a3);
    if (!verify_values(parseFloat(inp.value), F_11_a3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-F-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$F_{1-1} = 1 - \\frac{A_2}{A_1} =  ${parseFloat(F_11_a3.toFixed(3))}  $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Heat flow
      </p>
      <div id="act3-Q-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-6">
               $$Q = \\frac{A_1\σ\ϵ(T_1^4 - T_2^4)(1 - F_{1-1})}{1 - F_{1-1}(1 - \\epsilon)} = $$
            </div>
            <div class="row justify-content-center col-md-4" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-Q-inp' class='form-control fs-16px' /><span style="display:contents;">W</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_Q();' id='act3-vf-btn6'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verify_Q() {
    let inp = (document.getElementById('act3-Q-inp'));
    console.log(Q_a3);
    if (!verify_values(parseFloat(inp.value), Q_a3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q = \\frac{A_1\σ\ϵ(T_1^4 - T_2^4)(1 - F_{1-1})}{1 - F_{1-1}(1 - \\epsilon)} =  ${parseFloat(Q_a3.toFixed(3))} \\ W $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <button class='btn btn-info btn-sm std-btn' onclick='activity_completed(this);' id='act3-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity3();
//# sourceMappingURL=activity3.js.map