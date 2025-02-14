<template>
    <footer class="bg-white mt-5 dark:bg-gray-800">
        <div class="max-w-screen-xl w-full mx-auto py-6 px-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {{new Date().getFullYear()}} <a href="https://www.trainees.cn/"
                                                                                                                    class="hover:underline">程序员菜鲲&nbsp;&&nbsp;练习生基地</a>. All Rights Reserved.
            </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li style="display: flex;align-items: center;">
              <img src="https://g.csdnimg.cn/common/csdn-footer/images/badge.png" alt="" style="width: 15px;height: 15px;margin-right: 5px" />
              备案号：<a href="https://beian.miit.gov.cn" class="mr-4 hover:underline md:mr-6 ">黔ICP备19007557号</a>
            </li>
          </ul>
        </div>
    </footer>
</template>
<script setup lang="ts">
</script>