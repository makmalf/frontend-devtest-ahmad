<template>
    <v-dialog v-model="dialog" persistenti width="500">
        <v-card>
            <v-card-title class="font-weight-bold">
                {{ dialogTitle }}
            </v-card-title>
            <v-card-text>
            <slot name="dialogText"></slot>
            </v-card-text>
            <v-card-actions class="d-flex justify-end">
            <slot name="dialogAction"></slot>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: true,
        }
    },
    props: ["dialogTitle"],
}
</script>

<style>
.dialog-btn {
    background: #000;
}
</style>
