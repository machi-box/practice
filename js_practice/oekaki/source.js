 (function () {
                                var canvas = document.getElementById('myCanvas');
                                if (screen.width < 860) {
                                    var canvasWidth = ~~(700 * screen.width / 860);
                                    var canvasHeight = ~~(400 * screen.width / 860);
                                    canvas.width = canvasWidth;
                                    canvas.height = canvasHeight;
                                } else {
                                    var canvasWidth = 700;
                                    var canvasHeight = 400;
                                }
                                var ctx = canvas.getContext('2d');
                                ctx.beginPath();
                                ctx.fillStyle = "#f5f5f5";
                                ctx.fillRect(0, 0, canvasWidth, canvasHeight);
                                var defosize = 7;
                                var defocolor = "#555555";
                                var defoalpha = 1.0;
                                var mouseX = "";
                                var mouseY = "";
                                canvas.addEventListener('mousemove', onMove, false);
                                canvas.addEventListener('mousedown', onClick, false);
                                canvas.addEventListener('mouseup', drawEnd, false);
                                canvas.addEventListener('mouseout', drawEnd, false);

                                function onMove(e) {
                                    if (e.buttons === 1 || e.witch === 1) {
                                        var rect = e.target.getBoundingClientRect();
                                        var X = ~~(e.clientX - rect.left);
                                        var Y = ~~(e.clientY - rect.top);
                                        draw(X, Y);
                                    };
                                };

                                function onClick(e) {
                                    if (e.button === 0) {
                                        var rect = e.target.getBoundingClientRect();
                                        var X = ~~(e.clientX - rect.left);
                                        var Y = ~~(e.clientY - rect.top);
                                        draw(X, Y);
                                    }
                                };

                                function draw(X, Y) {
                                    ctx.beginPath();
                                    ctx.globalAlpha = defoalpha;
                                    if (mouseX === "") {
                                        ctx.moveTo(X, Y);
                                    } else {
                                        ctx.moveTo(mouseX, mouseY);
                                    }
                                    ctx.lineTo(X, Y);
                                    ctx.lineCap = "round";
                                    ctx.lineWidth = defosize * 2;
                                    ctx.strokeStyle = defocolor;
                                    ctx.stroke();
                                    mouseX = X;
                                    mouseY = Y;
                                };

                                function drawEnd() {
                                    mouseX = "";
                                    mouseY = "";
                                }
                                var menuicon = document.getElementsByClassName("menuicon");
                                for (i = 0; i < menuicon.length; i++) {
                                    menuicon[i].addEventListener("click", canvasMenu, false)
                                }

                                function canvasMenu() {
                                    thisId = this.id;
                                    if (thisId.indexOf("size") + 1) {
                                        defosize = ~~this.id.slice(4, this.id.length);
                                    }
                                    if (thisId.indexOf("color") + 1) {
                                        defocolor = "#" + this.id.slice(5, this.id.length);
                                    }
                                    if (thisId.indexOf("alpha") + 1) {
                                        defoalpha = (~~this.id.slice(5, this.id.length)) / 10;
                                    }
                                    if (thisId.indexOf("clear") + 1) {
                                        if (confirm("すべて消去しますか？")) {
                                            ctx.beginPath();
                                            ctx.fillStyle = "#f5f5f5";
                                            ctx.globalAlpha = 1.0;
                                            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
                                        }
                                    }
                                }
                            })();