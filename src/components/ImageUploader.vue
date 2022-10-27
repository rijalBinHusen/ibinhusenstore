<template>
  <q-card style="width: 200px" class="my-card">
    <q-img v-if="imageUrl" :src="imageUrl"> </q-img>
    <div v-else class="text-h6 q-pa-md">Gambar produk</div>

    <q-card-actions>
      <!-- Delete action -->
      <q-btn @click="removeImage" v-if="imageUrl" flat>
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
              ref="inputFile"
              @change="uploadImage($event.target.files[0])" /></span
        ></a>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref } from 'vue';
import uploadFile from 'src/firebase/Storages/upload';
import { removeFile } from 'src/firebase/Storages/remove';

const props = defineProps({
  imgsrc: {
    type: String,
  },
});

const inputFile = ref<HTMLInputElement>();

const imageUrl = ref(props.imgsrc);

const emit = defineEmits(['imageUrl', 'removedImage']);

const uploadImage = async (file: File) => {
  if (file) {
    // upload file and wait the download url
    const { downloadURL } = await uploadFile(
      file,
      new Date().getTime().toString()
    );

    emit('imageUrl', downloadURL.value);
    inputFile.value = undefined;
  }
};

const removeImage = async () => {
  if (imageUrl.value) {
    await removeFile(imageUrl.value);
    imageUrl.value = '';
    emit('removedImage');
  }
};
</script>
