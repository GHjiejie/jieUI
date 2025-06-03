<template>
  <div
    class="hover-container"
    @mouseenter="showActions = true"
    @mouseleave="showActions = false"
  >
    <!-- 内容显示区域 -->
    <div class="content-display" v-show="!isEditing">
      <slot name="content">{{ content }}</slot>

      <!-- 操作按钮 (hover时显示) -->
      <div class="action-buttons" v-if="showActions && !isEditing">
        <button @click.stop="handleExport" class="action-btn export-btn">
          <slot name="export-icon">📤</slot>
        </button>
        <button @click.stop="handleEdit" class="action-btn edit-btn">
          <slot name="edit-icon">✏️</slot>
        </button>
      </div>
    </div>

    <!-- 编辑区域 -->
    <div v-show="isEditing" class="edit-area">
      <slot name="edit" :value="editingContent" :update="updateContent">
        <textarea v-model="editingContent" class="edit-textarea"></textarea>
      </slot>
      <div class="edit-actions">
        <button @click="saveEdit" class="save-btn">保存</button>
        <button @click="cancelEdit" class="cancel-btn">取消</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

interface Props {
  content: string;
}

interface Emits {
  (e: "update:content", value: string): void;
  (e: "export", value: string): void;
  (e: "edit-start"): void;
  (e: "edit-save", value: string): void;
  (e: "edit-cancel"): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const showActions = ref(false);
const isEditing = ref(false);
const editingContent = ref(props.content);
const originalContent = ref(props.content);

watch(
  () => props.content,
  (newVal) => {
    editingContent.value = newVal;
  }
);

watch(
  () => showActions.value,
  (newValue) => {
    console.log("Actions visibility changed:", newValue);
  }
);

const handleExport = () => {
  emit("export", props.content);
};

const handleEdit = () => {
  isEditing.value = true;
  editingContent.value = props.content;
  originalContent.value = props.content;
  emit("edit-start");
};

const saveEdit = () => {
  isEditing.value = false;
  emit("update:content", editingContent.value);
  emit("edit-save", editingContent.value);
};

const cancelEdit = () => {
  isEditing.value = false;
  editingContent.value = originalContent.value;
  emit("edit-cancel");
};

const updateContent = (value: string) => {
  editingContent.value = value;
};
</script>

<style scoped>
.hover-container {
  position: relative;
  display: inline-block;
  width: 100%;
}

.content-display {
  position: relative;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  min-height: 40px;
}

.action-buttons {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 8px;
}

.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;
}

.action-btn:hover {
  background-color: #f0f0f0;
}

.edit-area {
  width: 100%;
}

.edit-textarea {
  width: 100%;
  min-height: 100px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
}

.edit-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
}

.save-btn,
.cancel-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.save-btn {
  background-color: #4caf50;
  color: white;
}

.cancel-btn {
  background-color: #f44336;
  color: white;
}
</style>
