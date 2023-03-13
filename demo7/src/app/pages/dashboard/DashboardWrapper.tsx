import {useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget4,
  MixedWidget8,
  MixedWidget3,
  ListsWidget9,
  TablesWidget9,
  ListsWidget3,
  StatisticsWidget4,
  ListsWidget2,
  ListsWidget6,
  TablesWidget5,
} from '../../../_metronic/partials/widgets'

const dashboardBreadCrumbs: Array<PageLink> = [
  {
    title: 'Home',
    path: '/dashboard',
    isSeparator: false,
    isActive: false,
  },
]

const DashboardPage = () => {
  useEffect(() => {
    // We have to show toolbar only for dashboard page
    document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
    return () => {
      document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
    }
  }, [])

  return (
    <>
      {/* begin::Row */}
      <div className='row gy-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xxl-4'>
          <MixedWidget3
            className='card-xl-stretch mb-xl-8'
            chartColor='primary'
            chartHeight='250px'
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xxl-8'>
          <TablesWidget9 className='card-xxl-stretch mb-5 mb-xl-8' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row gy-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xxl-4'>
          <StatisticsWidget4
            className='card-xxl-stretch-50 mb-5 mb-xl-8'
            svgIcon='/media/icons/duotune/general/gen025.svg'
            color='danger'
            description='Weekly Income'
            change='750$'
          />

          <StatisticsWidget4
            className='card-xxl-stretch-50 mb-xl-8'
            svgIcon='/media/icons/duotune/ecommerce/ecm002.svg'
            color='success'
            description='Sales Change'
            change='+259'
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xxl-4'>
          <ListsWidget9 className='card-xxl-stretch mb-xl-8' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xxl-4'>
          <ListsWidget4 className='card-xxl-stretch mb-5 mb-xl-8' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row gy-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xxl-4'>
          <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xxl-8'>
          <TablesWidget9 className='card-xxl-stretch mb-5 mb-xl-8' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row gy-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xl-4'>
          <ListsWidget2 className='card-xl-stretch mb-xl-8' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-4'>
          <ListsWidget6 className='card-xl-stretch mb-xl-8' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-4'>
          <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5} />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row g-5 gx-xxl-8'>
        {/* begin::Col */}
        <div className='col-xxl-4'>
          <MixedWidget8
            className='card-xxl-stretch mb-xl-3'
            chartColor='success'
            chartHeight='150px'
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xxl-8'>
          <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
    </>
  )
}

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={dashboardBreadCrumbs}>
        {intl.formatMessage({id: 'MENU.DASHBOARD'})}
      </PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
