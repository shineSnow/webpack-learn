export default () =>{
    fetchApi()
    return (`
            <i class="weui-icon-success"></i>
            <i class="weui-icon-success-no-circle"></i>
            <i class="weui-icon-circle"></i>
            <i class="weui-icon-warn"></i>
            <i class="weui-icon-download"></i>
            <i class="weui-icon-info-circle"></i>
            <i class="weui-icon-cancel"></i>
            <i class="weui-icon-search"></i>
    `)
}

const fetchApi = ()=>{
   fetch('/activity/get/recommend_goods_list/33021/15064913171430.html').then(res=>{
       return res.json();
   }).then(res=>{
       console.log(res)
   })
}