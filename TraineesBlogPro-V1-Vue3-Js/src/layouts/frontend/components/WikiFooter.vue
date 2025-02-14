<template>
    <footer class="bg-white relative z-40 border-t border-b border-gray-200 mt-5 dark:bg-[#0d1117] dark:border-gray-900">
        <div class="w-full mx-auto max-w-screen-2xl py-6 px-4 md:flex md:items-center md:justify-between">
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
