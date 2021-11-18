<template>
    <header>
        <img src="assets/logo.png" alt="logo" />
    </header>
    <main>
        <section>
            <div class="image">
                <img src="assets/chart.svg" alt="chart" />
            </div>
            <div class="col">
                <p>
                    A breakdown by google trends shows that Nigerians have relied on Search to
                    get most of the answers they require. The top inquiries made include “How to
                    make money online?” “What is a computer?” and “how much is the dollar to
                    naira?” amongst others.
                    This literally means 9 out of 10 persons are looking for ways to maximize their
                    assets for gains in this failing economy, and while that may seem easy for
                    some, it is hell for others. Yet 5 out of every 7 persons have difficulties
                    managing their fund in unique ways to get value from it.
                    Without doubt, effectively managing your assets is not an easy journey
                    without the appropriate fund management plan. You might say to yourself
                    ‘Why do I need fund management for my hard-earned money’ or ‘I'd rather
                    meet my sister in law and join her weekly contribution group’ or ‘I'd rather work
                    hard and save my funds with my bank.
                </p>
                <p>
                    <b>Is there really a need to know about assets management?</b>
                </p>
            </div>
        </section>
        <section>
            <div class="col">
                <p>
                    A 5-year-old child knows the Nigerian economy is on the verge of collapse.
                    How do you position and properly manage your assets, funds and job
                    security? Whatever stage you're in right now, you must have an excellent plan
                    for personal finance management. Having an excellent knowledge of the
                    economic landscape, personal finance management and industry positioning
                    is essentially how you can thrive
                    Enter your details below for a FREE consultation from industry experts
                    ranging across real estate, skilled immigration, private equity, venture capital
                    and Investment banking.
                </p>
            </div>
            <div class="image">
                <img src="assets/analytics.svg" alt="wallet" />
            </div>
        </section>
        <div class="fortform">
            <!-- <script async data-uid="93a73bf28a" src="https://motivated-hustler-6203.ck.page/93a73bf28a/index.js"></script> -->
        </div>
        <div class="end">
            <p>Fortfolio is a fund management company that is well vested in diverse investment plans and products to sustain and ensure profitable management of our client’s funds to secure their financial goals.</p>
        </div>
    </main>
</template>
<script>
import { onMounted } from "@vue/runtime-core"
export default {
    setup() {
        onMounted(() => {
            const fortform = document.querySelector(".fortform");
            const formscript = document.createElement("script")
            formscript.setAttribute("src", "https://motivated-hustler-6203.ck.page/93a73bf28a/index.js")
            formscript.setAttribute("data-uid", "93a73bf28a")
            fortform.appendChild(formscript)
        })
    }
}

</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
body {
    font-size: 16px;
    header {
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        img {
            width: auto;
            height: 100%;
        }
    }
    main {
        width: 100%;
        section {
            scroll-snap-align: start;
            display: flex;
            align-items: center;
            height: 100vh;
            .image {
                width: 50%;
                height: 100%;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .col {
                padding: 0 50px;
                width: 50%;
                p {
                    line-height: 2rem;
                    font-size: 1.1rem;
                    letter-spacing: 0.08rem;
                }
            }
        }
        .fortform {
            display: flex;
            justify-content: center;
            form {
                width: 100%;
            }
        }
        .end {
            max-width: 800px;
            margin: 0 auto;
            p {
                text-align: center;
                line-height: 2rem;
                font-size: 1.1rem;
                letter-spacing: 0.08rem;
            }
        }
    }
}

@media screen and (max-width: 800px) {
    body {
        main {
            section {
                .col {
                    p {
                        line-height: 1.4rem;
                        font-size: 0.85rem;
                        letter-spacing: 0.03rem;
                    }
                }
            }
            .end p {
                line-height: 1.4rem;
                font-size: 0.85rem;
                letter-spacing: 0.03rem;
            }
        }
    }
}
@media screen and (max-width: 500px) {
    body {
        main {
            section {
                flex-direction: column;
                height: 100%;
                &:nth-of-type(2) {
                    flex-direction: column-reverse;
                }
                .image {
                    width: 100%;
                }
                .col {
                    width: 100%;
                }
            }
            .fortform {
                padding: 20px;
                form {
                    max-width: 100% !important;
                }
            }
            .end {
                max-width: 100%;
                padding: 20px;
            }
        }
    }
}
@media screen and (max-width: 800px) {
    body {
        main {
            section {
                .col {
                    padding: 0 20px;
                }
            }
        }
    }
}
</style>