<template>
  <transition name="slide">
    <!-- 模态框 -->
    <div class="modal" v-show="showModal">
      <!-- 遮罩 -->
      <div class="mask"></div>
      <!-- 弹框 -->
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a href="javascript:;" class="btn" v-if="btnType == 1" @click="$emit('submit')">{{sureText}}</a>
          <a href="javascript:;" class="btn" v-else-if="btnType == 2" @click="$emit('cancel')">{{cancelText}}</a>
          <div class="btn-group" v-else>
            <a href="javascript:;" class="btn" @click="$emit('submit')">{{sureText}}</a>
            <a href="javascript:;" class="btn btn-default" @click="$emit('cancel')">{{cancelText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    // 弹框类型：大large、中middle、小small、表单form
    modalType: {
      type: String,
      default: 'from'
    },
    // 弹框标题
    title: String,
    // 按钮类型：1：确定按钮，2：取消按钮，3：确定取消
    btnType: String,
    // 按钮文本
    sureText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    // 显示模态框
    showModal: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang='scss' scoped>
.modal {
  @include position(fixed);
  z-index: 10;
  transition: all 0.5s;
  .mask {
    @include position(fixed);
    background-color: $colorI;
    opacity: 0.5;
  }
  &.slide-enter-active {
    top: 0;
  }
  &.slide-leave-active {
    top: -100%;
  }
  &.slide-enter {
    top: -100%;
  }
  .modal-dialog {
    @include position(absolute, 40%, 50%, 660px, auto);
    background-color: $colorG;
    transform: translate(-50%, -50%);
    .modal-header {
      height: 60px;
      background-color: $colorJ;
      padding: 0 25px;
      line-height: 60px;
      font-size: $fontI;
      .icon-close {
        @include positionImg(
          absolute,
          23px,
          25px,
          14px,
          14px,
          '/imgs/icon-close.png'
        );
        transition: transform 0.3s;
        &:hover {
          transform: scale(1.5) rotate(360deg);
        }
      }
    }
    .modal-body {
      padding: 42px 40px 54px;
      font-size: 14px;
    }
    .modal-footer {
      height: 82px;
      line-height: 82px;
      text-align: center;
      background-color: $colorJ;
    }
  }
}
</style>