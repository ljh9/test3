<script setup>
import DirectiveVOn from './DirectiveVOn.vue'
import DirectiveVOnMethodHandlers from './DirectiveVOnMethodHandlers.vue'
import DirectiveVOnCallMethodInline from './DirectiveVOnCallMethodInline.vue'
import DirectiveVOnEventArgument from './DirectiveVOnEventArgument.vue'
import KeyModifier from './KeyModifier.vue'
import KeyboardEvent from './KeyboardEvent.vue'
import SystemModifierKeys from './SystemModifierKeys.vue'
import ExactModifier from './ExactModifier.vue'
</script>

<template>
    <div>
        <h4>Directive v-on</h4>
        <DirectiveVOn />
        <h4>Directive v-on with method handlers</h4>
        <DirectiveVOnMethodHandlers />
        <h4>Calling Methods in Inline Handlers</h4>
        <DirectiveVOnCallMethodInline />
        <h4>Accessing Event Argument in Inline Handlers</h4>
        <DirectiveVOnEventArgument />
        <h4>Key Modifier</h4>
        <KeyModifier />
        <h4>KeyboardEvent.key</h4>
        <KeyboardEvent />
        <h4>System Modifier Keys</h4>
        <SystemModifierKeys />
        <h4>.exact Modifier</h4>
        <ExactModifier />
    </div>
</template>