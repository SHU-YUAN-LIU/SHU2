      <template>
        <!-- 服務介紹-卡片 -->
        <div class="card-group">
            <div class="card-pic">
                <img :src="item.serverPic">
            </div>
            <p>{{ item.serverTitle }}</p>
            <span>
                {{ item.serverContent }}
            </span>
            <button class="view-more">{{ item.viewMore }}</button>
        </div>
    </template>

<script>
export default {

    props: ['item'],
}
</script>


<style></style>