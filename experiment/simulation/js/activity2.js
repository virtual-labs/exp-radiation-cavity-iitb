let act2_div;
function activity2(btn) {
    btn && btn.remove();
    internal_calculation2();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act2-div'>
      <h3>Activity 2</h3>
      <br>
      <br>
      <img src="./images/fig2.png" style="width:30%">
      <br>
      <br>
      <p style="text-align:left;">
         A conical hole is machined in a block of metal whose emissivity is ${e}. <br>
         The hole is ${D_cm_a2}cm in diameter at the surface and ${H_cm_a2}cm deep. <br>
         If the metal block is heated to ${T_a2}&deg;K, find the radiation emitted form the conical cavity.
         
         $$
            \σ = 5.67 \× 10^{-8}
         $$
      </p>
      <br>
      <div id="act2-L-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$ L = \\sqrt{H^2 + \\frac{D^2}{4}} =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-L-inp' class='form-control fs-16px' /><span style="display:contents;"> m</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_L();' id='act2-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
    act2_div = document.getElementById('act2-div');
}
function internal_calculation2() {
    D_cm_a2 = parseFloat(random(2.5, 3.5).toFixed(1));
    D_m_a2 = parseFloat((D_cm_a2 / 100).toFixed(3));
    H_cm_a2 = parseFloat(random(4.0, 4.5).toFixed(1));
    H_m_a2 = parseFloat((H_cm_a2 / 100).toFixed(3));
    T_a2 = random1(700, 801);
    L_a2 = Math.sqrt(Math.pow(H_m_a2, 2) + Math.pow(D_m_a2, 2) / 4);
    A1_a2 = (Math.PI * D_m_a2 * L_a2) / 2;
    A2_a2 = (Math.PI / 4) * Math.pow(D_m_a2, 2);
    F_11_a2 = 1 - A2_a2 / A1_a2;
    Q_a2 =
        (A1_a2 * e * sigma * Math.pow(T_a2, 4) * (1 - F_11_a2)) /
            (1 - (1 - e) * F_11_a2);
    console.log('D_cm_a2', D_cm_a2);
    console.log('D_m_a2', D_m_a2);
    console.log('H_cm_a2', H_cm_a2);
    console.log('H_m_a2', H_m_a2);
    console.log('T_a2', T_a2);
    console.log('L_a2', L_a2);
    console.log('A1_a2', A1_a2);
    console.log('A2_a2', A2_a2);
    console.log('F_11_a2', F_11_a2);
    console.log('Q_a2', Q_a2);
}
function a2_verify_L() {
    let inp = (document.getElementById('act2-L-inp'));
    console.log(L_a2);
    if (!verify_values(parseFloat(inp.value), L_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-L-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$L = \\sqrt{H^2 + \\frac{D^2}{4}} = ${parseFloat(L_a2.toFixed(3))} \\ m $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <div id="act2-A-div">
         <div class="fs-16px" style="color:red;">
            Note: enter value till 5 decimal places.
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$A_1 = \\frac{\πDL}{2} =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='text' style="margin:0 2%; width:70%" id='act2-A1-inp' class='form-control fs-16px' /><span style="display:contents;">m<sup>2</sup></span>
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$A_2 = \\frac{\π }{4}D^2 =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='text' style="margin:0 2%; width:70%" id='act2-A2-inp' class='form-control fs-16px' /><span style="display:contents;">m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_A();' id='act2-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_A() {
    let inp1 = (document.getElementById('act2-A1-inp'));
    let inp2 = (document.getElementById('act2-A2-inp'));
    console.log(A1_a2, A2_a2);
    if (!verify_values(parseFloat(inp1.value), A1_a2)) {
        inp1.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp1.style.border = '1px solid #ced4da';
        inp1.disabled = true;
    }
    if (!verify_values(parseFloat(inp2.value), A2_a2)) {
        inp2.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp2.style.border = '1px solid #ced4da';
        inp2.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-A-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$A_1 = \\frac{\πDL}{2}  = ${parseFloat(A1_a2.toFixed(5))} \\ m^2 $$
         
         $$
            A_2 = \\frac{\π }{4}D^2 = ${parseFloat(A2_a2.toFixed(5))}\\ m^2
         $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <div id="act2-F-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$F_{1-1} = 1 - \\frac{A_2}{A_1} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-F-inp' class='form-control fs-16px' />
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_F();' id='act2-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_F() {
    let inp = (document.getElementById('act2-F-inp'));
    console.log(F_11_a2);
    if (!verify_values(parseFloat(inp.value), F_11_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-F-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$F_{1-1} = 1 - \\frac{A_2}{A_1} =  ${parseFloat(F_11_a2.toFixed(3))}  $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <div id="act2-Q-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-6">
               $$Q = \\frac{A_1\× \ϵ\× \σ \× T^4\×(1-F_{1-1})}{1 - (1 - \ϵ)\× F_{1-1}} = $$
            </div>
            <div class="row justify-content-center col-md-4" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-Q-inp' class='form-control fs-16px' /><span style="display:contents;">W</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_Q();' id='act2-vf-btn4'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_Q() {
    let inp = (document.getElementById('act2-Q-inp'));
    console.log(Q_a2);
    if (!verify_values(parseFloat(inp.value), Q_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q = \\frac{A_1\× \ϵ\× \σ \× T^4\×(1-F_{1-1})}{1 - (1 - \ϵ)\× F_{1-1}} =  ${parseFloat(Q_a2.toFixed(3))} \\ W $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <button class='btn btn-info btn-sm std-btn' onclick='activity3(this);' id='act2-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity2();
//# sourceMappingURL=activity2.js.map