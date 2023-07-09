<script>
    import Button from "./Button.svelte";
</script>

<div class="newsletter-container">
    <h4 class="newsletter__title">Contact</h4>
    <p>Fill the out form to contact me for your inquiries.</p>
    <form action="" class="newsletter__form">
        <input type="text" name="" placeholder="Name" />
        <input type="email" name="" id="" placeholder="E-mail" />
        <textarea name="" id="" cols="30" rows="10" placeholder="Message" />
        <Button text="Subscribe" colourPrimary="#171717" colourSecondary="#dedede" />
    </form>
</div>

<style lang="scss">
    .newsletter-container {
        width: 80%;
        margin: 4rem auto 0 auto;

        h4 {
            text-align: center;
            font-size: 3rem;
        }

        p {
            text-align: center;
            padding: 1rem 3rem;
            margin-bottom: 3rem;
        }

        form {
            display: flex;
            flex-direction: column;

            input,
            textarea {
                font-family: inherit;
                font-size: 1.6rem;
                color: #13113a;
                padding: 1.5rem;
                margin-bottom: 2rem;

                &:focus {
                    outline: none;
                    border-color: #13113a;
                }
            }

            input {
                height: 5rem;
            }

            button {
                align-self: center;
                font-size: 1.6rem;
            }
        }
    }
</style>
