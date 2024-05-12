import { ref } from 'vue'

const viewBoxes = {
  cropped: '0 256 1024 512',
  original: '0 0 1024 1024'
}

export default ref(viewBoxes)
