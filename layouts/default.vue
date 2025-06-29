<template>
    <div>
      <div class="fixed z-50 top-0 left-0 right-0">
        <CoreNavbar />
      </div>
      <div class="w-screen overflow-hidden relative pt-[71px] md:pt-[73px]">
        <slot />
        <CoreFooter />
      </div>
    </div>
  </template>
  