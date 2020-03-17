
<template>


    <div class="has-text-white has-background-dark" style="height: 100vh; position: relative">

      <split-pane :min-percent='20' :default-percent='30' split="horizontal" class="">
        <template slot="paneL" class="has-background-success" >
            <split-pane :min-percent='20' :default-percent='80' split="vertical">
                <template slot="paneL">C</template>
                <template slot="paneR">D</template>
            </split-pane>
        </template>
        <template slot="paneR">
            B
        </template>

        <!-- <template slot="paneR">

          <split-pane split="horizontal">

            <template slot="paneL">
             B
            </template>

            <template slot="paneR">
              <split-pane split="vertical" :default-percent='30'>

                <template slot="paneL">
                 C
                </template>

                <template slot="paneR">
                 D
                </template>

              </split-pane>
            </template>

          </split-pane>

        </template> -->
      </split-pane>

      <div class="box has-background-black">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>

  </div>

    </template>

<script>

    export default {
        name: "testView",
        components: {
        },
        data() {
            return {
                code: 'const a = 10',
                cmOptions: {
                    tabSize: 4,
                    mode: 'text/javascript',
                    theme: 'monokai',
                    lineNumbers: true,
                    line: true,
                }
            }
        }
    }

</script>

<style media="screen">



</style>
