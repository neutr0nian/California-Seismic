import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  BuildingOffice2Icon,
  GlobeAmericasIcon,
  HomeModernIcon,
  UserGroupIcon,
  CalculatorIcon,
  PaintBrushIcon,
  ScaleIcon,
  CubeIcon,
  ExclamationTriangleIcon,
  AcademicCapIcon,
  ChartBarIcon,
  Squares2X2Icon,
  HomeIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom"


const products = [
  { name: '01: Intro to Seismic Exam', description: 'An overview of the exam and its requirements', href: '#', icon: AcademicCapIcon },
  { name: '02: Geology & Earthquakes', description: 'Background information on how earthquakes occur', href: '#', icon: GlobeAmericasIcon },
  { name: '03: Code Provisions', description: 'How the building code works', href: '#', icon: ScaleIcon },
  { name: '04: Risk Categories', description: 'Defining seismic risk by building type', href: '#', icon: UserGroupIcon },
  { name: '05: Building Systems', description: 'Vertical and Lateral system', href: '#', icon: BuildingOffice2Icon },
  { name: '06: Ductility', description: 'The concept of ductility and R values', href: '#', icon: HomeModernIcon },
  { name: '07: Base Shear', description: 'How to calculate base shear', href: '#', icon: CalculatorIcon },
  { name: '08: Force Distribution', description: 'How to determine story forces', href: '#', icon: ChartBarIcon },
  { name: '09: Drift', description: 'Lateral drift calculations ', href: '#', icon: BuildingLibraryIcon },
  { name: '10A: Flexible Diaphragms', description: 'Intro to diaphragms and flexible analysis', href: '#', icon: HomeIcon },
  { name: '10B: Rigid Diaphragms', description: 'Rigid diaphgragm analysis', href: '#', icon: BuildingOfficeIcon },
  { name: '11: Irregularities', description: 'Irregularities and redundancy as applied to seismic design', href: '#', icon: ExclamationTriangleIcon },
  { name: '12: Non-structural Components', description: 'Forces and basic design of non-structural components', href: '#', icon:CubeIcon },
  { name: '13: Seismic Detailing', description: 'How to identify good seismic load paths', href: '#', icon: PaintBrushIcon },
]


const callsToAction = [
  { name: 'Show All Lectures', href: '#', icon: Squares2X2Icon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-1 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <NavLink className="-m-1.5 p-1.5" to='/'>
              <span className="sr-only">California Seismic</span>
              <img className="h-16 w-auto" src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Lectures
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-sm overflow-scroll rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 max-h-[70vh]">
                <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-sky-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <NavLink className="text-sm font-semibold leading-6 text-gray-900" to='/practice'>
              Practice
            </NavLink>
            <NavLink className="text-sm font-semibold leading-6 text-gray-900" to='/exam-guide'>
              Exam Guide
            </NavLink>
            <NavLink className="text-sm font-semibold leading-6 text-gray-900" to='/contributors'>
              Contributors
            </NavLink>
          </Popover.Group>
          <div data-testid = 'testBlankDiv'className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}

        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <NavLink to='/'className="-m-1.5 p-1.5">
              <span className="sr-only">California Seismic</span>
                <img
                  className="h-8 w-auto"
                  src={logo}
                  alt="California Seismic Logo"
                />
              </NavLink>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                          Lectures
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...callsToAction,...products].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <NavLink className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to="/practice">Practice</NavLink>
                  <NavLink className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to="/exam-guide">Exam Guide</NavLink>
                  <NavLink className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to="/contributors">Contributors</NavLink>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

    </>
  )
}