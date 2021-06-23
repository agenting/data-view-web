const CarouselListConfig = function() {
  this.config = {
    x: 0,
    y: 0,
    width: 350,
    height: 200,
    chartName: '轮播列表',
    chartType: 'CarouselList',
    rotate: 0,
    show: 'true',
    lock: 'false',
    choose: 'false',
    refresh: 'false',
    chartData: {
      dataSourceType: '',
      staticData: '{}',
      database: '',
      fileName: '',
      sql: 'select * from carousel_list'
    },
    data: {
      'body': [
        ['1', 'key1', 'value1'],
        ['2', 'key2', 'value2'],
        ['3', 'key3', 'value3'],
        ['4', 'key4', 'value4']
      ],
      'header': ['id', 'name', 'value']
    },
    interval: 8000,
    option: {
      header: {
        show: true,
        height: 50,
        fontColor: '#ffffff',
        fontSize: 13,
        data: []
      },
      body: {
        height: 30,
        fontColor: '#e2e2e2',
        fontSize: 12,
        speed: 3,
        rowNum: 5,
        data: []
      }
    }
  }
}

const getCarouselListConfig = function() {
  return new CarouselListConfig().config
}

export { getCarouselListConfig }