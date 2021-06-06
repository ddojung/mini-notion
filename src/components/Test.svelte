<script lang="ts">
    import styles from './test.scss';
    $:data = "sojung";
    const data2 = 'lee';
</script>

<p class={styles.name}>{data} {data2}</p>

<style >
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->