<template>

<div class="">
<!-- <split-pane :min-percent='10' :default-percent='70' split="vertical">
    <template slot="paneL">
        <div v-for="i in 15" :key="i">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit, reiciendis totam itaque dolorem autem qui? Nesciunt libero eius esse optio et quod atque perferendis quidem neque, aspernatur cum rerum!
        </div>
    </template>
    <template slot="paneR" style="overflow-y: scroll">
        <div v-for="i in 115" :key="i">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit, reiciendis totam itaque dolorem autem qui? Nesciunt libero eius esse optio et quod atque perferendis quidem neque, aspernatur cum rerum!
        </div>
    </template> 
</split-pane> -->
<splitpanes class="has-text-light" style="height: 100vh">
  <pane class="resContainer">
    <div v-for="i in 10" :key="i">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo quas praesentium veniam nihil nisi architecto qui, enim iure culpa vel. Voluptas earum architecto eius tempore dolorum quo iste laboriosam.</div>
  </pane>
  <pane class="resContainer">
    <div v-for="i in 10" :key="i">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo quas praesentium veniam nihil nisi architecto qui, enim iure culpa vel. Voluptas earum architecto eius tempore dolorum quo iste laboriosam.</div>
  </pane>
  <pane class="resContainer">
      <div class="">
        <div v-for="i in 100" :key="i">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo quas praesentium veniam nihil nisi architecto qui, enim iure culpa vel. Voluptas earum architecto eius tempore dolorum quo iste laboriosam.</div>
      </div>
  </pane>
</splitpanes>

</div>



       
</template>

<script>

import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

export default {
	name: "testView",
	components: {Splitpanes, Pane},
	data() {
		return {
			expandOnHover: false,
      mobile: "reduce",
      reduce: false
		};
	}
};
</script>

<style lang="scss">

// .resContainer {
//     overflow-y: auto;
//     height: 100%;
//     white-space: pre-line;
// }

.p-1 {
  padding: 1em;
}
.sidebar-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    .sidebar-layout {
        display: flex;
        flex-direction: row;
        min-height: 100%;
    }
}
@media screen and (max-width: 1023px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini-mobile {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 1024px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}

</style>