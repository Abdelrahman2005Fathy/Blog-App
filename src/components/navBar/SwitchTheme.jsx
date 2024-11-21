import React, { useState, useEffect } from "react";
import * as Switch from "@radix-ui/react-switch";

const SwitchTheme = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  // وظيفة لتبديل الثيم
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // تطبيق السمة المظلمة أو الفاتحة
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");  // إضافة الفئة "dark" إلى body
    } else {
      document.body.classList.remove("dark");  // إزالة الفئة "dark" من body
    }
  }, [isDarkMode]);

  return (
    <form>
      <div className="min-h-screen flex items-center justify-center space-x-4">
        <label
          className="text-white text-sm font-medium"
          htmlFor="SwitchTheme"
        >
          Switch Theme
        </label>

        {/* 4. مكون Switch لتمكين التبديل بين الوضعين */}
        <Switch.Root
          className="relative h-[28px] w-[48px] cursor-pointer rounded-full bg-gray-300 dark:bg-gray-700 shadow-md outline-none transition-all duration-300"
          id="SwitchTheme"
          checked={isDarkMode}  // ربط حالة التبديل مع الزر
          onCheckedChange={toggleTheme}  // تغيير الحالة عند التبديل
        >
          <Switch.Thumb className="block w-[24px] h-[24px] bg-white rounded-full shadow-sm transition-transform duration-200 transform ease-in-out data-[state=checked]:translate-x-[20px]" />
        </Switch.Root>
      </div>
    </form>
  );
};

export default SwitchTheme;
