$(document).ready(function(){
                            // 스크롤을 할 때 마다 article이 뒤에서부터 앞으로 이동한다.
                            $(window).scroll(function(){
                                                        let sc = $(this).scrollTop()
                                                        // if(sc>=0 && sc<5000-2500){
                                                        //                     $('section article').removeClass('on')
                                                        //                     $('section article').eq(0).addClass('on')
                                                        //                     }
                                                        // if(sc>=5000-2500 && sc<10000-2500){
                                                        //                         $('section article').removeClass('on')
                                                        //                         $('section article').eq(1).addClass('on')
                                                        //                         }
                                                        // if(sc>=10000-2500 && sc<15000-2500){
                                                        //                         $('section article').removeClass('on')
                                                        //                         $('section article').eq(2).addClass('on')
                                                        //                         }
                                                        // if(sc>=15000-2500 && sc<20000-2500){
                                                        //                         $('section article').removeClass('on')
                                                        //                         $('section article').eq(3).addClass('on')
                                                        //                         }
                                                        // if(sc>=20000-2500 && sc<25000-2500){
                                                        //                         $('section article').removeClass('on')
                                                        //                         $('section article').eq(4).addClass('on')
                                                        //                         }
                                                        // 0부터 시작해서 4까지 반복해서 진행하라.
                                                        for(var a = 0; a<5; a++){
                                                                                $('section article').eq(a).css({'transform':'translateZ('+(-(5000*a)+sc)+'px'})

                                                                                if(sc>=(5000*a)-2500 && sc<(5000*(a+1))-2500){
                                                                                                                            $('section article').removeClass('on')
                                                                                                                            $('section article').eq(a).addClass('on');
                                                                                                                            $('nav li').removeClass('on')
                                                                                                                            $('nav li').eq(a).addClass('on')
                                                                                                                            }

                                                                                }
                                                        });


                            // nav li를 클릭할 때마다 scroll이 움직여라.
                            $('nav li').click(function(){
                                                        let i = $(this).index()
                                                        $('html,body').stop().animate({scrollTop:5000},1400)
                                                        });

                            // 마우스 휠을 했을 때 스크롤의 위치를 바꾸어라.
                            $(window).mousewheel(function(event,delta){
                                let mo = 0
                                // 마우스를 올렸을 때
                                if(delta>0){
                                    if(mo>0)mo--
                                    console.log(mo)
                                    $('html,body').stop().animate({scrollTop:5000*mo},1400)
                                }
                                // 마우스를 내렸을 때
                                if(delta<0){    
                                    if(mo<4)mo++
                                    console.log(mo)
                                    $('html,body').stop().animate({scrollTop:5000*mo},1400)
                                }
                            });

                            // 아티클에서 마우스가 움직였을 때 이미지가 움직여라.
                            $('article').mousemove(function(e){
                                                                let x = e.pageX/100; /* e.page에서 e는 funcion(e)의 e 부분과 같게 작성하면 된다. */
                                                                let y = e.pageY/100;
                                                                // .obj51 { bottom:-290px; left:-100px;}
                                                                // .obj52 { top:170px; right:30px;}
                                                                // .obj53 { bottom:0px; left:-30px;}
                                                                $(this).find('.obj51').css({'bottom':(-290+y)+'px','left':(-100-x)+'px'})
                                                                })
                            })