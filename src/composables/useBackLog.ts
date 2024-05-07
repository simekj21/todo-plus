import { ref, computed } from "vue";

interface BackLogItem {
  title: string;
}

const backLogItems = ref<BackLogItem[]>([]);

export const useBackLog = () => {

  const addNewItem = (item: BackLogItem) => {
    backLogItems.value.push(item);

    console.log("New item added to the back log: ", backLogItems.value);
  };

  const getBackLog = computed(() => backLogItems.value);

  return {
    addNewItem,
    getBackLog,
  };
};
