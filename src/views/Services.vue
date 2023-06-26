<script setup>

</script>
 
<template>
<!-- คลุมทั้งหน้าเว็ป -->
<div class="w-full h-full flex flex-col">

        <!-- /////////////// ย่อหน้าแรก /////////////// -->
        <div class="p-5 ml-10 mr-10 flex justify-center item-center h-screen">
        
            <!-- ข้อความ กับ ปุ่ม -->
            <div class="w-full flex pl-10 justify-center" className="card-body">
                <div class="mt-10">
                    <h2 class="text-2xl text-gray-500">Hi,I'm</h2>
                    <h1 className="text-7xl">Korapin</h1>
                    <h1 className="text-7xl">Jongsriwattanaporn</h1>
                    
                    <div class="pt-6 w-2/3">
                        <h2 class="text-normal text-gray-500">Currently, I'm studying for a bachelor's degree in the Information Technology King Mongkut's University of Technology Thonburi, 3st year</h2>
                    </div>

                    <div class="mt-20 flex">
                      <a href="#about" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 bg-purple-600 rounded-full shadow-md group">
                      <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-800 group-hover:translate-x-0 ease">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </span>
                      <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">MORE INFO</span>
                      <span class="relative invisible">Button Text</span>
                      </a>
                    </div>
                    
                </div>
            </div>

            <!-- รูปภาพ -->
            <div class="w-1/3 justify-end">
                <figure><img src="../assets/images/Jengjy.png" alt="jeng" class="object-contain"></figure>
            </div>

        </div>
    

        <!-- /////////////// ย่อหน้าที่สอง /////////////// -->
        <div id="about" class="w-full h-screen">
          <div class="flex">
          <figure class="border-8 border-white rounded mr-1"><img src="../assets/images/Jeng2.jpg" alt="jeng" class="h-80"></figure>
              <form>
                <label for="email">Subscribe to my mailing list</label>
                <input type="email" value="" name="email" placeholder="email address" required>
                <input type="submit" value="Subscribe" name="subscribe">
              </form>
            </div>
        </div>

        
        <!-- /////////////// ย่อหน้าที่สาม /////////////// -->
        <footer class="footer p-10 bg-neutral text-neutral-content">
            <div>
                <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                <p>Korapin Jeng Ltd.<br/>Providing reliable tech since 2023</p>
            </div> 
            <div>
                <span class="footer-title">Social</span> 
                <div class="grid grid-flow-col gap-4">
                <a href="https://twitter.com/PinkzPowder" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
                <a href="https://www.youtube.com/channel/UCiP-5HsDlZXDWbVcsNgx-IQ" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
                <a href="https://www.facebook.com/korapinz/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
            </div>
        </footer>

</div>
</template>
 
<style scoped>
  @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#about {
  display: grid;
  place-items: center;
  background-color: #774db3;
}

.card-body {
  animation: fadeIn 2s;
}

img.object-contain {
  max-width: 100%;
  max-height: 100%;
  animation: fadeIn 2s;
}



.footer-title {
  font-weight: bold;
}


form {
  position: relative;
  width: 440px;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 40px 40px -20px rgba(0, 0, 0, 0.25);
  text-align: center;
  
}

/* ข้อความตัวใหญ่ */
label {
  display: block;
  margin-bottom: 20px;
  color: #774db3;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
}

/* กรอบของปุ่ม */
input {
  display: block;
  width: 90%;
  margin: 0 auto;
  border: 0;
  padding: 0;
  font-family: inherit;
}

input[type=email] {
  margin-bottom: 20px;
  border-bottom: 2px solid;
  padding: 10px 0;
  background-color: transparent;
  color: #999999;
  font-size: 16px;
  letter-spacing: 1px;
  text-align: center;
  transition: 0.4s;
}

/* ช่องกรอกข้อความขยายขึ้น */
input[type=email]:focus {
  width: 100%;
}

/* ปุ่ม submit */
input[type=submit] {
  padding: 15px;
  background-color: #774db3;
  color: white;
  border-radius: 5px;
  box-shadow: 0 5px 0 #774db3;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.25s;
}
/* hold ปุ่ม submit */
input[type=submit]:hover, input[type=submit]:focus {
  box-shadow: 0 7px 0 #774db3;
  transform: translateY(-2px);
}

/* กด ปุ่ม submit */
input[type=submit]:active {
  box-shadow: 0 3px 0 #774db3;
  transform: translateY(2px);
}
</style>