<template src="./ChatWidget.html"></template>

<script>
import { X, Sparkles, Send } from 'lucide-vue-next';

export default {
  name: 'ChatWidget',
  
  components: {
    X,
    Sparkles,
    Send
  },
  
  props: {
    isChatOpen: {
      type: Boolean,
      required: true
    },
    chatMessages: {
      type: Array,
      required: true
    },
    userInput: {
      type: String,
      required: true
    },
    isThinking: {
      type: Boolean,
      required: true
    }
  },

  emits: ['toggle-chat', 'send-message', 'update:userInput'],

  setup(props, { emit }) {
    /******************************************************
     *                RETURN                              *
     ******************************************************/
    
    return {};
  }
};
</script>

<style scoped>
.typing-dot {
  animation: typing 1.4s infinite ease-in-out both;
}

.typing-dot:nth-child(1) { animation-delay: -0.32s; }
.typing-dot:nth-child(2) { animation-delay: -0.16s; }

@keyframes typing {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}
</style>
