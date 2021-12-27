window.addEventListener('load', function () {
            let timer = document.getElementById('time');
            timer.onload = autoTime();

            function autoTime() {
                function getTime() {
                    let dayTime = new Date();
                    let year = dayTime.getFullYear();
                    let month = dayTime.getMonth() + 1;
                    month = month < 10 ? '0' + month : month;
                    let date = dayTime.getDate();
                    date = date < 10 ? '0' + date : date;
                    let h = dayTime.getHours();
                    h = h < 10 ? '0' + h : h;
                    let m = dayTime.getMinutes();
                    m = m < 10 ? '0' + m : m;
                    let s = dayTime.getSeconds();
                    s = s < 10 ? '0' + s : s;
                    let days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
                    let day = days[dayTime.getDay()];
                    let greetings = '';
                    if (h < 12) {
                        greetings = '早上好！';
                    } else if (h < 18) {
                        greetings = '下午好！';
                    } else {
                        greetings = '晚上好！';
                    }
                    document.getElementById('time').innerText = greetings + year + '-' + month + '-' + date +
                        ' ' + h +
                        ':' + m + ':' + s + ' ' + day;
                }
                getTime();

                // 定时器
                setInterval(() => getTime(), 1000);
            }
            let sbt = document.querySelector('#sbt');
            let inp = document.querySelector('#psw');
            let inp1 = document.querySelector('#psw1');
            let inp2 = document.querySelector('#psw2');
            let tip = document.querySelector('#tip');
            let inpDiv = document.getElementById('#inpDivA');
            let inpDiB = document.getElementById('#inpDivB');
            let inpDiC = document.getElementById('#inpDivC');
            inp.addEventListener('focus', function () {
                tip.innerHTML = '';
            });
            inp.addEventListener('blur', function () {
                return this.value;
            });
            inp1.addEventListener('focus', function () {
                tip.innerHTML = '';
            });
            inp1.addEventListener('blur', function () {
                return this.value;
            });
            inp2.addEventListener('focus', function () {
                tip.innerHTML = '';
            });
            inp2.addEventListener('blur', function () {
                return this.value;
            });
            sbt.addEventListener('click', function (event) {
                if (inp.value == '') {
                    tip.innerHTML = '用户名不能为空';
                    inpDivA.style.border = '1px solid red';
                    event.preventDefault();
                } else if (inp1.value == '') {
                    tip.innerHTML = '请输入密码';
                    inpDivB.style.border = '1px solid red';
                    event.preventDefault();
                } else if (inp2.value == '') {
                    tip.innerHTML = '请输入密码';
                    inpDivC.style.border = '1px solid red';
                    event.preventDefault();
                } else {
                    return true;
                }
            });

            let drag = document.querySelector('legend');
            let dragDiv = document.getElementById('centers');
            drag.addEventListener('mousedown', function (e) {
                let x = e.pageX - dragDiv.offsetLeft;
                let y = e.pageY - dragDiv.offsetTop;
                let h = (dragDiv.offsetHeight - 17) / 2;
                // console.log(x, y, h);
                document.addEventListener('mousemove', move);

                function move(e) {
                    let body = document.querySelector('body');
                    console.log(dragDiv.offsetLeft, dragDiv.offsetWidth, body.scrollWidth);
                    if (dragDiv.offsetLeft + dragDiv.offsetWidth <= body.scrollWidth) {
                        dragDiv.style.left = (e.pageX - x) + "px";
                        dragDiv.style.top = (e.pageY + h) + "px";
                    }
                }

                document.addEventListener('mouseup', function () {
                    document.removeEventListener('mousemove', move);
                })
            });
            //记住用户名
            var remember = document.querySelector('#remember');
            if (localStorage.getItem('inp')) {
                inp.value = localStorage.getItem('inp');
                remember.checked = true;
            }
            remember.addEventListener('change', function () {
                if (this.checked) {
                    localStorage.setItem('inp', inp.value)
                } else {
                    localStorage.removeItem('inp');
                }
            })
        })
