let maindiv = (document.getElementById('pannelcreate'));
let act1_div;
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Radiation (Heat & Mass Transfer): Radiation from Cavity</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-div'>
      <h3>Activity 1</h3>
      <br>
      <br>
      <img src="./images/fig1.png" style="width:30%">
      <br>
      <br>

      <p style="text-align:left">
         A cylindrical hole is machined in a block of metal whose emissivity is ${e}. <br>
         The hole is ${D_cm_a1}cm in diameter and ${H_cm_a1}cm deep. <br>
         If the block is heated at ${T_a1}&deg;K, find the radiation emitted by the hole. <br>

         $$
            \σ = 5.67 \× 10^{-8}
         $$
      </p>
      <br>

      <div id="act1-A-div">
         <div class="fs-16px" style="color:red;">
            Note: enter value till 5 decimal places.
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$A_1 = \πDH + \\frac{\π }{4}D^2 =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='text' style="margin:0 2%; width:70%" id='act1-A1-inp' class='form-control fs-16px' /><span style="display:contents;">m<sup>2</sup></span>
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$A_2 = \\frac{\π }{4}D^2 =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='text' style="margin:0 2%; width:70%" id='act1-A2-inp' class='form-control fs-16px' /><span style="display:contents;">m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_A();' id='act1-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
    act1_div = document.getElementById('act1-div');
}
function internal_calculation1() {
    D_cm_a1 = parseFloat(random(2.5, 3.5).toFixed(1));
    D_m_a1 = D_cm_a1 / 100;
    H_cm_a1 = parseFloat(random(4.0, 4.5).toFixed(1));
    H_m_a1 = H_cm_a1 / 100;
    T_a1 = random1(700, 801);
    A1_a1 = Math.PI * D_m_a1 * H_m_a1 + (Math.PI / 4) * Math.pow(D_m_a1, 2);
    A2_a1 = (Math.PI / 4) * Math.pow(D_m_a1, 2);
    F_11_a1 = 1 - A2_a1 / A1_a1;
    Q_a1 =
        (A1_a1 * e * sigma * Math.pow(T_a1, 4) * (1 - F_11_a1)) /
            (1 - (1 - e) * F_11_a1);
    console.log('D_cm_a1', D_cm_a1);
    console.log('D_m_a1', D_m_a1);
    console.log('H_cm_a1', H_cm_a1);
    console.log('H_m_a1', H_m_a1);
    console.log('T_a1', T_a1);
    console.log('A1_a1', A1_a1);
    console.log('A2_a1', A2_a1);
    console.log('F_11_a1', F_11_a1);
    console.log('Q_a1', Q_a1);
}
function a1_verify_A() {
    let inp1 = (document.getElementById('act1-A1-inp'));
    let inp2 = (document.getElementById('act1-A2-inp'));
    console.log(A1_a1, A2_a1);
    if (!verify_values(parseFloat(inp1.value), A1_a1)) {
        inp1.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp1.style.border = '1px solid #ced4da';
        inp1.disabled = true;
    }
    if (!verify_values(parseFloat(inp2.value), A2_a1)) {
        inp2.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp2.style.border = '1px solid #ced4da';
        inp2.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-A-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$A_1 = \πDH + \\frac{\π }{4}D^2 = ${parseFloat(A1_a1.toFixed(5))} \\ m^2 $$
         
         $$
            A_2 = \\frac{\π }{4}D^2 = ${parseFloat(A2_a1.toFixed(5))}\\ m^2
         $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <div id="act1-F-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$F_{1-1} = 1 - \\frac{A_2}{A_1} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-F-inp' class='form-control fs-16px' />
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_F();' id='act1-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_F() {
    let inp = (document.getElementById('act1-F-inp'));
    console.log(F_11_a1);
    if (!verify_values(parseFloat(inp.value), F_11_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-F-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$F_{1-1} = 1 - \\frac{A_2}{A_1} =  ${parseFloat(F_11_a1.toFixed(3))}  $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <div id="act1-Q-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-6">
               $$Q = \\frac{A_1\× \ϵ\× \σ \× T^4\×(1-F_{1-1})}{1 - (1 - \ϵ)\× F_{1-1}} = $$
            </div>
            <div class="row justify-content-center col-md-4" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-Q-inp' class='form-control fs-16px' /><span style="display:contents;">W</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_Q();' id='act1-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_Q() {
    let inp = (document.getElementById('act1-Q-inp'));
    console.log(Q_a1);
    if (!verify_values(parseFloat(inp.value), Q_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q = \\frac{A_1\× \ϵ\× \σ \× T^4\×(1-F_{1-1})}{1 - (1 - \ϵ)\× F_{1-1}} =  ${parseFloat(Q_a1.toFixed(3))} \\ W $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <button class='btn btn-info btn-sm std-btn' onclick='activity2(this);' id='act1-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function activity_completed(btn) {
    btn && btn.remove();
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity1.js.map