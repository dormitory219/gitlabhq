/* global Vue, gl */
/* eslint-disable no-param-reassign */

((gl) => {
  gl.VueRunningScope = Vue.extend({
    components: {
      'vue-running-icon': gl.VueRunningIcon,
    },
    props: [
      'scope',
      'scopeurl',
    ],
    template: `
      <td class="commit-link">
        <a :href='scopeurl(scope.id)'>
          <span class="ci-status ci-running">
            <vue-running-icon></vue-running-icon>
            &nbsp;running
          </span>
        </a>
      </td>
    `,
  });
})(window.gl || (window.gl = {}));
