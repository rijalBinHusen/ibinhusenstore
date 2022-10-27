<template>
  <q-card style="width: 200px" class="my-card">
    <q-img v-if="imageUrl" :src="imageUrl"> </q-img>

    <q-card-actions>
      <!-- Delete action -->
      <q-btn v-if="imageUrl" flat>
        <a
          class="q-btn-item non-selectable no-outline text-pink q-btn--flat q-btn--rectangle q-btn--actionable q-focusable q-hoverable q-btn--dense"
          tabindex="0"
          role="button"
          ><span class="q-focus-helper"></span
          ><span
            class="q-btn__content text-center col items-center q-anchor--skip justify-center row"
            ><i
              class="q-icon notranslate material-icons"
              aria-hidden="true"
              role="img"
              >remove</i
            ></span
          ></a
        >
      </q-btn>
      <!-- Import file  -->
      <q-btn v-else flat>
        <a
          class="q-btn-item non-selectable no-outline q-btn--flat q-btn--rectangle q-btn--actionable q-focusable q-hoverable q-btn--dense"
          tabindex="0"
          role="button"
          ><span class="q-focus-helper"></span
          ><span
            class="q-btn__content text-center col items-center q-anchor--skip justify-center row"
            ><i
              class="q-icon notranslate material-icons"
              aria-hidden="true"
              role="img"
              >add_box</i
            ><input
              class="q-uploader__input overflow-hidden absolute-full"
              tabindex="-1"
              type="file"
              title=""
              @change="uploadImage($event.target.files[0])" /></span
        ></a>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref } from 'vue';
import uploadFile from 'src/firebase/Storages/upload';

const props = defineProps({
  imgsrc: {
    type: String,
  },
});

const imageUrl = ref(props.imgsrc);

const emit = defineEmits(['imageUrl']);

const uploadImage = async (file: File) => {
  if (file) {
    // upload file and wait the download url
    const { downloadURL } = await uploadFile(
      file,
      new Date().getTime().toString()
    );

    imageUrl.value = downloadURL.value;

    console.log(imageUrl.value);

    emit('imageUrl', downloadURL.value);
  }
};
</script>
